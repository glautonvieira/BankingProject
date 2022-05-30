class HomePage {
  go() {
    cy.openHomepage()
    cy.findByRole('button', {name: 'Bank Manager Login'}).click();
  }
}

export default new HomePage();
