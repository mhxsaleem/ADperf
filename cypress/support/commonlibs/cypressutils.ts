export default class cypressutils {
  static clickButton(selector: string): void {
    cy.get(selector).click();
  }

  static elementvisible(selector: string): void {
    cy.get(selector).should('be.visible');
  }

  static elementenabled(selector: string): void {
    cy.get(selector).should('be.enabled');
  }

  static selectFromListBox(selector: string, value: string): void {
    cy.get(selector).select(value);
  }

  static inputText(selector: string, value: string): void {
    cy.get(selector).type(value);
  }

  static retrieveValue(selector: string): Cypress.Chainable<string> {
    return cy.get(selector).invoke('text');
  }

  static navigateUrl(url: string): void {
    cy.visit(url);
  }
}
