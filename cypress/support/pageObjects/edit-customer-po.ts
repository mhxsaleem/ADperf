class EditCustomerPo {
  getCustomerStoryPanel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('div[data-testid="customer-stories"]');
  }
  getCustomerStoryList() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('ul[data-testid="customer-stories-list"]');
  }

  getEditCustomerVerb() {
    return cy.iframe('iframe[id*="_cctTaskLauncher"]').findByRole('link', { name: 'Edit Customer' });
  }
}
export default EditCustomerPo;
