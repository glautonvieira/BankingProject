/// <reference types="cypress" />

const payloadPutBooking = require('../payloads/put-booking.json');
const payloadAuthBooking = require('../payloads/auth-booking.json');

function putBooking(idBooking, token) {
  return cy.request({
    method: 'PUT',
    url: `/booking/${idBooking}`,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${token}`
    },
    body: payloadPutBooking
  });
}

export { putBooking };
