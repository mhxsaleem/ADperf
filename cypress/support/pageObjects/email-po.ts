class EmailPO {
  getCloseEmail() {
    return cy.get('a[title="Exit Compose Email"]');
  }
  getEmailHeader() {
    return cy.get('div[id*=_lblHeader]');
  }
  getEmailLink() {
    return cy.findByRole('link', { name: 'Email' });
  }
}
export default EmailPO;
