class CancelPlanPage {
  selectPlanTable() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[role=rowgroup]');
  }

  nextButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=button_next]');
  }

  nextSaveButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=button_save]');
  }

  selectCancelReasonDropdown() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=input_reasonCode]');
  }

  cancelReasonList() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('ul[role="listbox"]');
  }

  selectCancelRadioBtn() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('input[value="cancel"]');
  }

  selectRetainRadioBtn() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('input[value="retain"]');
  }

  mutiStepper(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > span')
    );
  }

  mutiStepperStageCheck(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > svg[data-testid=EditIcon]')
    );
  }

  newAccountButtonCancel() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
      .find('[data-testid="account.__ui__isSavedBillingAccount_N"]');
  }

  paymentACHButtonCancel() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
      .find('[data-testid="account.payment.methodType_ACH"]');
  }

  SavedbillAccountCancel() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
        // .find('div[data-id] [type=checkbox]');
        .find('div:nth-child(2) > div > div> div > div> div > div[data-id] [type=checkbox]')
    );
  }

  selectAddressDropdown() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="cancel"]')
      .find('[data-testid=button_address-capture-toggle] > span >svg[data-testid=ArrowDropDownIcon]');
  }

  selectItemAddress() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('ul[role="menu"]');
  }

  getBillingAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="cancel"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_account.payment.address.0_search"]')
    );
  }

  inputAccountNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=input_accountNo]');
  }
  inputRoutingNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=input_routingNumber]');
  }
  inputAccountName() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=input_accountHolder]');
  }
  selectAccountType() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('[data-testid=input_accountType]');
  }

  selectAccountlistBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('ul[role="listbox"]');
  }

  cancelConfirm() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('button[data-testid="button_confirm_yes"]');
  }

  cancelConfirmationText() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="cancel"]').find('div > p');
  }
}
export default CancelPlanPage;
