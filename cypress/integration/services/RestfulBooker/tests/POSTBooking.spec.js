import * as POSTBooking from '../requests/POSTBooking.request';

describe('Create Booking', () => {
  it('should create a booking successfully', () => {
    POSTBooking.addBooking().should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('bookingid');
      expect(response.body.booking).to.have.property('firstname', 'Jim');
      expect(response.body.booking).to.have.property('lastname', 'Brown');
      expect(response.body.booking).to.have.property('totalprice', 111);
      expect(response.body.booking).to.have.property('depositpaid', true);
      expect(response.body.booking).to.have.property('bookingdates');
      expect(response.body.booking.bookingdates).to.have.property('checkin', '2018-01-01');
      expect(response.body.booking.bookingdates).to.have.property('checkout', '2019-01-01');
      expect(response.body.booking).to.have.property('additionalneeds', 'Breakfast');
      expect(response.duration).to.be.lessThan(1000);
    });
  });
})
