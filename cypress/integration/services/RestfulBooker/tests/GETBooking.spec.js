import * as GETBooking from '../requests/GETBooking.request';

describe('GET Booking', () => {
  it('should return a booking successfully', () => {
    GETBooking.allBookings().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null
    });
  });
});
