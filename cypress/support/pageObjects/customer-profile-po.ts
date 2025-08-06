class CustomerProfilePage {
  customerProfileTitle() {
    return cy.get('div[id*=_lblCustomerProfile]');
  }
  customerDetails() {
    return cy
      .iframe('iframe[id*="cctRenderURL"]')
      .find('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1wxaqej"]');
  }
}
export default CustomerProfilePage;
