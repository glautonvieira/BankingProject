/// <reference types="cypress" />

const payloadAddBooking = require('../payloads/add-booking.json');

function addBooking() {
  return cy.request({
    method: 'POST',
    url: '/booking',
    failOnStatusCode: false,
    body: payloadAddBooking
  });
}

export { addBooking };
