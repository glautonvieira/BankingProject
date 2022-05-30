class AddCustomerPage {
  add() {
    cy.findByRole('button', {name: 'Add Customer'}).click();
    cy.get("input[placeholder='First Name']").type('John');
    cy.get("input[placeholder='Last Name']").type('Doe');
    cy.get("input[placeholder='Post Code']").type('12345');
  }

  submit() {
    cy.get("button[type='submit']").click();
  }

  expectedMessageShouldBe(expectedMessage) {
    cy.on('window:alert', (str) => {
      expect(str).contains(expectedMessage);
    })
  }
}

export default new AddCustomerPage();
