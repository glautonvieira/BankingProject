import * as PUTBooking from '../requests/PUTBooking.request';
import * as GETBooking from '../requests/GETBooking.request';
import * as AUTHBooking from '../requests/AUTHBooking.request';

describe('PUT Booking', () => {
    it('should change the Booking successfully', () => {
      AUTHBooking.authBooking().then((resAuth) => {
        cy.log(resAuth.body.token);

        GETBooking.allBookings().then((resAllBookings) => {
          cy.log(resAllBookings.body[0].bookingid);

          PUTBooking.putBooking(resAllBookings.body[0].bookingid, resAuth.body.token).should((resPutBooking) => {
            expect(resPutBooking.status).to.equal(200);
        });
      });
    });
  });
});
