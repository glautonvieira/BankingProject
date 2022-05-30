/// <reference types="cypress" />

const payloadAuthBooking = require('../payloads/auth-booking.json');

function authBooking() {
  return cy.request({
    method: 'POST',
    url: '/auth',
    failOnStatusCode: false,
    body: payloadAuthBooking
  });
}

export { authBooking };
