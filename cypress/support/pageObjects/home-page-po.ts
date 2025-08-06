class HomePage {
  getTaskLauncher() {
    return cy.get('div[id*="cctTaskLauncher"]');
  }
  getIdentifyCustomerLink() {
    return cy.findByRole('link', { name: 'Identify Customer' });
  }
  getEditCustomerLink() {
    return cy.findByRole('link', { name: 'Edit Customer' });
  }
  getClosePerspectiveTab() {
    return cy.get('input[type="button"][id*="tabButton"]');
  }
  userProfileAccordian() {
    return cy.get('button[id*="_mbtAgentAvatar"]');
  }
  exitItemPageConfirm() {
    return cy.get('button[id*="_btnConfirm"]');
  }

  // logoutLink (){return cy.get('a[name=Log out]');}
  logoutLink() {
    return cy.get('#yui-gen10');
  }

  // identifyCustomerLink (){return cy.get('#f23_cctTaskLauncher > div > ul > li:nth-child(1) > a');}
  registerItemLink() {
    return cy.findByRole('link', { name: 'Add Item' });
  }
  editItemLink() {
    return cy.findByRole('link', { name: 'Edit Item' });
  }
  OverviewLink() {
    return cy.findByRole('link', { name: 'Overview' });
  }
  planLink() {
    return cy.findByRole('link', { name: 'Plans' });
  }
  mngBillingAccLink() {
    return cy.findByRole('link', { name: 'Manage Billing Account' });
  }

  mngBillingExchangeIcon() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=CurrencyExchangeIcon]');
  }

  customerProfileLink() {
    return cy.findByRole('link', { name: 'Customer Profile' });
  }

  cancelPlanLink() {
    return cy.findByRole('link', { name: 'Cancel Plans' });
  }

  exitCustomerProfile() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        .get('div[id*="_btnExit"]>a')
    );
  }

  exitManageBillingAccount() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        .get('div[id*="_btnExit"]>a')
    );
  }
}
export default HomePage;
