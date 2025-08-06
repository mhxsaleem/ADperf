class RegisterCustomerPage {
  getContactInformationSection() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('fieldset[aria-label="Contact Information"]');
  }
  getMailingAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_address.0_search"]')
    );
  }
  getMailingAddressMBA() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_account.payment.address.0_search"]')
    );
  }
  editMailingAddress() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_address.0_search"]')
    );
  }
  getMailCheckBox() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('checkbox', { name: 'Do not mail' });
  }
  getCallCheckbox() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('checkbox', { name: 'Do not call' });
  }
  getEmailCheckBox() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('checkbox', { name: 'Do not email' });
  }
  getSmsCheckBox() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('checkbox', { name: 'Do not SMS' });
  }
  editMailCheckBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').findByRole('checkbox', { name: 'Do not mail' });
  }
  editCallCheckbox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').findByRole('checkbox', { name: 'Do not call' });
  }
  editEmailCheckBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').findByRole('checkbox', { name: 'Do not email' });
  }
  editSmsCheckBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').findByRole('checkbox', { name: 'Do not SMS' });
  }
  getSaveButton() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('button', { name: 'Save' });
  }
  getSaveButtonEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').findByRole('button', { name: 'Save' });
  }
  getCancelButton() {
    return cy.iframe('iframe[id*="cctRenderURL').findByRole('button', { name: 'Cancel' });
  }
  getConfirmCancel_Yes() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_confirm_yes]');
  }

  getConfirmCancel_No() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_confirm_no]');
  }
  getManualAddressEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid="button_enter-address-manually"]');
  }

  getManualAddressEditCustomer() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="button_enter-address-manually"]');
  }

  ManualAddressEditToggle() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="button_toggle_editAddressManually"]');
  }

  getPoBox() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.poBox"]');
  }

  getBuildingNumber() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.number"]');
  }
  getAppartment() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.subBuilding"]');
  }
  getStreet() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.street"]');
  }
  getCity() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.city"]');
  }
  getState() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL')
        // .find('[data-testid="input_address.0.regionOrStateCode"]');
        .find('div[name="address.0.regionOrStateCode"] > div > div > input')
    );
  }
  getZipCode() {
    return cy.iframe('iframe[id*="cctRenderURL').find('[data-testid="input_address.0.postalCode"]');
  }
  getCountry() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL')
        // .find('[data-testid="input_address.0.countryCode"]');
        .find('[name="address.0.countryCode"]')
    );
  }
  manualAddress_Done() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_done]');
  }
  manualAddressEdit_Done() {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="_edit"]').find('[data-testid=button_done]');
  }
  editBuildingNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="input_address.0.number"]');
  }
  editAppartment() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="input_address.0.subBuilding"]');
  }
  editStreet() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="input_address.0.street"]');
  }
  editCity() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="input_address.0.city"]');
  }
  editState() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="input_address.0.regionOrStateCode"]');
  }
  editZipCode() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid="input_address.0.postalCode"]');
  }
}
export default RegisterCustomerPage;
