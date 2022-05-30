class CustomersPage {
  search() {
    cy.findByRole('button', {name: 'Customers'}).click();
    cy.get("input[placeholder='Search Customer']").type('Hermoine');
  }

  delete() {
    cy.findByRole('button', {name: 'Delete'}).click();
  }

  expectedMessageShouldBe(expectedMessage) {
    cy.on('window:alert', (str) => {
      expect(str).contains(expectedMessage);
    })
  }
}

export default new CustomersPage();
