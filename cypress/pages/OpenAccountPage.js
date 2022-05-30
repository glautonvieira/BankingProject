class OpenAccountPage {
  constructor() {
    this.randomCustomerId = Math.floor(Math.random() * 5 + 1);
    this.randomCurrencyId = Math.floor(Math.random() * 3 + 1);
  }

  create() {
    cy.findByRole('button', {name: 'Open Account'}).click();
    cy.get("select[ng-model='custId']").select(this.randomCustomerId);
    cy.get("select[ng-model='currency']").select(this.randomCurrencyId);
  }

  submit() {
    cy.findByRole('button', {name: 'Process'}).click();
  }

  expectedMessageShouldBe() {
    cy.on('window:alert', (str) => {
      expect(str).contains(`Account created successfully with account Number`);
    })
  }
}

export default new OpenAccountPage();
