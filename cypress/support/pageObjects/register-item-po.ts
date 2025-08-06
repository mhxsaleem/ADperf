class RegisterItemPage {
  registerTitle() {
    return cy.get('div[id*=_lblDisplayName]');
  }
  nextButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid=button_registrationNextButton]');
  }
  nextButtonInItemPage() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[data-testid=button_create-offer]');
        .find('[data-testid=button_save]')
    );
  }
  getTotalAmount(rowNo: number) {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('#review-offer-form h6 > span').eq(rowNo);
  }
  getTotalNextAmount(rowNo: number) {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('#review-offer-form h6 > p').eq(rowNo);
  }

  getTotalAmountConfPage(rowNo: number) {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('#root h6 > span').eq(rowNo);
  }
  getTotalNextAmountConfPage(rowNo: number) {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('#root h6 > p').eq(rowNo);
  }

  nextreviewquotesPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=button_next]');
  }
  nextButtonInOfferPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=button_save]');
  }
  saveButtonInAddressForm() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[form="verify-item-address-form"][data-testid="button_save"]');
  }
  addAnotherItemButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=button_add-another-btn]');
  }

  mutiStepper(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="plans/new"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > span')
    );
  }

  mutiStepperStageCheck(stageNo: number) {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div:nth-child(1) > span > span > span');
        .find('div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel > div')
        .eq(stageNo)
        .find('span > span > svg[data-testid=EditIcon]')
    );
  }

  registrationCard() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[id*="_hasRegistrationCard"]');
  }
  selectItemBrandDropdown() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[id=mui-component-select-manufacturerBrandCode]');
        .find('[name=manufacturerBrandCode] > div > div > input')
    );
  }
  selectCustomerAddressDropdown() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=button_address-capture-toggle]');
  }
  selectCustomerAddress() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('ul[role="menu"]');
  }

  selectAddressDropdown() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid=button_address-capture-toggle] > span >svg[data-testid=ArrowDropDownIcon]');
  }

  selectItemAddress() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('ul[role="menu"]');
  }
  selectCustomerAddressEditDropdown() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid=button_address-capture-toggle]');
  }
  getManualAddressEditCustomer() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('ul[role="menu"]');
  }

  getItemAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="plans/new"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_address.0_search"]')
    );
  }

  getBillingAddress() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"][src*="plans/new"]')
        // .find('[name="address.0.__ui__addressSearch"]');
        .find('[data-testid="input_account.payment.address.0_search"]')
    );
  }

  selectItemTypeDropdown() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[id=mui-component-select-itemTypeCode]');
        .find('[name=itemTypeCode] > div > div > input')
    );
  }
  selectItemBrand() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('ul[role="listbox"]');
  }

  selectItemType() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('ul[role="listbox"]');
  }
  selectAccountlistBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('ul[role="listbox"]');
  }
  inputFilterData() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[data-testid=filterbox_items] >div > input');
        .find('input[type="search"]')
    );
  }

  inputFilterDataInOfferItemTable() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_registered-items]');
        .find('input[type="search"]')
    );
  }

  mbaselectAccountlistBox() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('ul[role="listbox"]');
  }
  mbainputFilterData() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('input[type="search"]');
  }

  inputModelNumber() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-test-id=model-lookup-autocomplete] > div > div > input');
  }
  editModelNumber() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-test-id=model-lookup-autocomplete] > div > div > input');
  }
  inputModelNumberSr() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="claims"]')
      .find('[data-test-id=model-lookup-autocomplete] > div > div > input');
  }
  inputSerialNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=input_serialNumber]');
  }
  inputSerialNumberSr() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="claims"]').find('[data-testid=input_serialNumber]');
  }
  editSerialNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid=input_serialNumber]');
  }
  inputItemReceivedDate() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[id="input_purchase.date"]');
        .find('[data-testid="input_purchase.date"]')
    );
  }
  inputPurchasePrice() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid="input_purchase.price"]');
  }
  selectExtendedPlanYes() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.extendedServicePlanOnAppliance_true"]');
  }
  selectExtendedPlanNo() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.extendedServicePlanOnAppliance_false"]');
  }
  selectWorkingOrderYes() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.operationalStatusCode_true"]');
  }
  selectWorkingOrderNo() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.operationalStatusCode_false"]');
  }
  accidentalDamageTrue() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.accidentalDamage_true"]');
  }
  accidentalDamageFalse() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="additionalDetails.accidentalDamage_false"]');
  }

  verifyWorkingOrderYes() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        .find('[data-testid="undefined_yes"]')
    );
  }
  verifyWorkingOrderNo() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        .find('[data-testid="undefined_no"]')
    );
  }
  verifyaccidentalDamageTrue() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        .find('[data-testid="undefined_yes"]')
    );
  }
  verifyaccidentalDamageFalse() {
    return (
      cy
        // .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        .find('[data-testid="undefined_no"]')
    );
  }
  itemAddressSame() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="address.__ui__addressAsCorrespondenceAddress_true"]');
  }
  itemAddressDifferent() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="address.__ui__addressAsCorrespondenceAddress_false"]');
  }
  savedAddressYes() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="address.__ui__selectSavedAddress_true"]');
  }
  savedAddressNo() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="address.__ui__selectSavedAddress_false"]');
  }
  NewAddressForItem() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[name="address.__ui__newAddress.0.__ui__addressSearch"]');
  }
  registerItemButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=button_add-item]');
  }
  txtRegCode() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[name="registrationCard.__ui__registrationCode"]');
  }
  btnRegCodeLookup() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('div.MuiFormControl-root.css-dytxym > button');
  }
  editConfirmItemButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[data-testid=button_save]');
  }
  itemTable() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=table_items]');
  }
  offerTable() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=data-grid]');
  }
  offerTableNewPlan() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[data-testid=table_registered-items]');
        .find('[role=rowgroup]')
    );
  }
  billingTableNewPlan() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[data-testid=table_registered-items]');
        .find('[role=rowgroup]')
        .eq(0)
    );
  }
  offerOrAddeditemTable() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_registered-items]');
        .find('[role=rowgroup]')
    );
  }

  btnaddtocart() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').contains('button', 'Add to Cart');
    // .find('[role=rowgroup]')
  }

  btninCustomerPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').contains('button', 'Add to Cart');
    // .find('[role=rowgroup]')
  }

  planitemTable() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_plans]');
        .find('[role=rowgroup]')
    );
  }

  inputFilterPlan() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=filterbox_plans] >div > input');
        .find('input[type="search"]')
    );
  }

  offerOrAddeditemTableNextPageBtn() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
      .find('[data-testid="data-grid-pagination-navigation-next"]');
  }

  nextButtonInMngBillPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid="button_save"]');
  }

  nextButtonInselectBillPage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid="button_next"]');
  }

  savedbillingAccConfirmation() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid="button_cancel_no"]');
  }

  newAccountButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="account.__ui__isSavedBillingAccount_N"]');
  }
  newAccountButtonMBA() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
      .find('[data-testid="account.__ui__isSavedBillingAccount_N"]');
  }
  SavedbillAccount() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('div[data-id] [type=checkbox]');
        // .find('div:nth-child(2) > div > div> div > div> div > div[data-id] [type=checkbox]')
        .find('div:nth-child(1)[data-id] [type=checkbox]')
    );
  }

  savedAccountButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="account.__ui__isSavedBillingAccount_Y"]');
  }
  paymentACHButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="account.payment.methodType_ACH"]');
  }
  paymentACHButtonMBA() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
      .find('[data-testid="account.payment.methodType_ACH"]');
  }
  paymentCCButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="account.payment.methodType_CC"]');
  }
  billingSameAddress() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid="account.payment.address.__ui__isSameAsMailingAddress_true"]');
  }
  billingConfirmButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=button_save]');
  }

  mbabillingConfirmButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=button_save]');
  }

  mbabillingPopupConfirm() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('button[data-testid="button_confirm_yes"]'); //Not available in DIV
  }

  mbabillingPopupConfirmtxt() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').contains('button', 'Proceed with Billing Update');
  }

  mbabillingPopupCancel() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('button[data-testid="button_cancel_no"]');
  }

  planTableCustomerProfile() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=table_plans]');
  }
  cancelButton() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[id*=btnExit]');
  }
  itemNewAddress() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[name="address.__ui__newAddress.0.__ui__addressSearch"]');
  }

  savedAddress() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[id=mui-component-select-listOfAddresses]');
  }
  selectSavedAddress() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[role=listbox]');
  }
  hasRegistrationCardButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid*="hasRegistrationCard_true"]');
  }
  noRegistrationCardButton() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-testid*="_hasRegistrationCard_false"]');
  }
  registerItemPopup() {
    return cy.get('[id*="_fpgMessage"]');
  }
  registerItemValidationMessages() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=dialog_validation]');
  }
  sendDataInRow() {
    // return cy
    //   .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
    //   .find('[data-testid=dialog_validation]');
    cy.get('tbody')
      .find('tr')
      .eq(1)
      .invoke('text')
      .then((text) => {
        return text;
      });
  }
  itemExitButton() {
    return cy.get('div[id*=_lblDisplayName]').siblings('[id*=_btnExit]').children('[id*=_btnExit]');
  }
  verifyDetailsScriptMessage() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
      .find('[data-return cy*="script-page-Account Details"]');
  }
  addItemScriptMessage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-return cy*="script-page-Add Item"]');
  }
  inputAccountNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=input_accountNo]');
  }
  inputRoutingNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=input_routingNumber]');
  }
  inputAccountName() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('[data-testid=input_accountHolder]');
  }
  selectAccountType() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]')
        // .find('[id=mui-component-select-accountType]');
        .find('div > [role=combobox]')
    );
  }

  failureMessage() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="plans/new"]').find('#alert-dialog-description > div');
  }

  failurePopup_confirm() {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="plans/new"]').find('[data-testid=button_ok]');
  }

  mbainputAccountNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=input_accountNo]');
  }
  mbainputRoutingNumber() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=input_routingNumber]');
  }

  mbainputAccountName() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('[data-testid=input_accountHolder]');
  }
  mbaselectAccountType() {
    return cy.iframe('iframe[id*="_cctRenderURL"]').find('div > [role=combobox]');
  }

  mbaViewBilling() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="customers"]')
        // .find('[data-testid=table_registered-items]');
        .find('[role=tablist] > button')
        .eq(1)
    );
  }

  billAccName() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_billingAccName]');
  }

  billAccNo() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="customers"]').find('[data-testid=input_bankAccountNumber]');
  }
}
export default RegisterItemPage;
