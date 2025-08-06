class ServiceRequestPage {
  ServiceRequestsLink() {
    return cy.findByRole('link', { name: 'Service Requests' });
  }

  btnAddRequest() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('button[data-testid=button_add_request]');
  }
  srPageHeading() {
    return cy.get('[id*="lblDisplayName"]');
  }

  btnNextinSrPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').contains('button', 'Next');
  }

  btnSelectRepairSlot() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').contains('button', 'Select Repair Slot');
  }

  btnBookRepairAppointment() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').contains('button', 'Book Repair Appointment');
  }

  selectPlanTable() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('[role=rowgroup]');
  }

  selectSlotTable() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('div[role=presentation] > div[role=rowgroup]');
  }

  mutiStepper(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > span')
    );
  }

  mutiStepperStageCheck(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > svg[data-testid=EditIcon]')
    );
  }

  selectAddressDropdown() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
      .find('[data-testid=button_address-capture-toggle] > span >svg[data-testid=ArrowDropDownIcon]');
  }

  selectItemAddress() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('ul[role="menu"]');
  }
  getItemAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="claims"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_address.0_search"]')
    );
  }

  getBillingAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="claims"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_account.payment.address.0_search"]')
    );
  }

  selectFaultCodeDropdown() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
        // .find('[id=mui-component-select-faultCode]');
        .find('div > [role=combobox]')
    );
  }

  faultCodeList() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('ul[role="listbox"]');
  }

  faultCodeDesc() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('textarea[name="faultCodeDescription"]');
  }

  inputFaultDate() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
        // .find('[id="input_purchase.date"]');
        .find('[data-testid="input_faultDatetime"]')
    );
  }

  inputAvailableDate() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
        // .find('[id="input_purchase.date"]');
        .find('[data-testid="input_first-available-date"]')
    );
  }

  btnUserInput(btnText: string) {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').contains('button', btnText);
  }

  data_testid_UserInput(testid: string) {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="claims"]').find('[data-testid="' + testid + '"]');
  }

  id_UserInput(testid: string) {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="claims"]').find('[id="' + testid + '"]');
  }

  name_UserInput(name: string) {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="claims"]').find('[name="' + name + '"]');
  }

  inputModelNumberSr() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
      .find('[data-test-id=model-lookup-autocomplete] > div > div > input');
  }

  getPhoneType() {
    return cy
      .iframe('iframe[id*="cctRenderURL"][src*="claims"]')
      .find('[id="mui-component-select-phone.REPLACE_ROW.type"]');
  }

  getSelectPhoneOption() {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="claims"]').find('[role=listbox]');
  }
  getSelectPhoneDropDown() {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="claims"]').find('[role=combobox]');
  }

  btnViewEditRequest() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('button[data-testid=button_edit_request]');
  }

  sbcompany() {
    return cy.get('[id*="company"]');
  }
  sbusername() {
    return cy.get('[id*="username"]');
  }
  sbpassword() {
    return cy.get('[id*="password"]');
  }
  sbloginform() {
    return cy.get('[id*="loginform_"][type="submit"]');
    // return cy.get('form');
  }
}
export default ServiceRequestPage;
