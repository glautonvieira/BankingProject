/// <reference types="cypress" />

function allBookings() {
  return cy.request({
    method: 'GET',
    url: '/booking',
    failOnStatusCode: false,
  });
}

export { allBookings };
