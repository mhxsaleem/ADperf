class SearchCustomerPage {
  getIdentifyCustomerTitle() {
    return cy.get('[id*="_lblIdentifyCustomer"]');
  }
  getFirstNameLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('First Name');
  }
  getClientLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Client');
  }
  getLastNameLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Last Name');
  }
  getAddressLine1Label() {
    // return cy.iframe('iframe[id*="cctRenderURL"]').contains("Address Line 1");
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Address');
  }
  getZipCodeLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Zip Code');
  }
  getPhoneNumberLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Phone Number');
  }
  getEmailAddressLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Email Address');
  }
  getPlanNumberLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Plan Number');
    // return cy.iframe('iframe[id*="cctRenderURL"]').contains("Contract Reference");
  }
  getOfferReferenceLabel() {
    return cy.iframe('iframe[id*="cctRenderURL"]').contains('Offer Reference');
  }
  getClearButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_clear]');
    // return cy.iframe('iframe[id*="cctRenderURL"]').find("[data-testid=button_cancel]");
  }
  getSearchButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_search]');
    // return cy.iframe('iframe[id*="cctRenderURL"]').find("[data-testid=button_save]");
  }
  getResultTable() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=table_customer]');
  }
  getCustomerSearchResult() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-id^="GEN:"]');
  }

  getNewCustomerButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid="button_newCustomer"]');
  }
  getSelectCustomerButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_selectCustomer]');
  }
  getSelectClientDropdown() {
    // return cy.iframe('iframe[id*="cctRenderURL"]').find("[id=mui-component-select-client]"
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[id=mui-component-select-clientCode]');
        .find('div > [role=combobox]')
    );
  }
  getSelectClient() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[role=listbox]');
  }
  getClientList() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('ul[role="listbox"]');
  }
  getFirstNameTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_firstName]');
  }
  getLastNameTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_surname]');
  }
  getAddressLine1TextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_address]');
  }
  getZipCodeTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_postalCode]');
  }
  getMobileTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[name=mobileNumber]');
  }
  getPlanNumberTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_contractReference]');
  }
  getOfferReferenceTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_offerReference]');
  }
  getZipcodeTextBox() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=input_postalCode]');
  }
  getValidationPopup() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=customer-search-form-validation-errors-modal]');
  }
  getValidationPopup_ok() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[data-testid=button_ok]');
  }
}

export default SearchCustomerPage;
