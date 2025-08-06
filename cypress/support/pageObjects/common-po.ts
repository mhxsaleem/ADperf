import '@testing-library/cypress';
import 'cypress-iframe';

let phoneRow: string;
let emailRow: string;

class CommonPO {
  setPhoneNoRow(rowNo: string) {
    phoneRow = rowNo;
  }
  setEmailRow(rowNo: string) {
    emailRow = rowNo;
  }
  getValidationMessages() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('#alert-dialog-description > div');
  }
  getEmailAddButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find("[data-testid*='button_email']");
  }

  getPhoneAddButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find("[data-testid='button_phone.add']");
  }
  getExitCrossMark() {
    return cy.iframe('iframe[id*="cctRenderURL"][src*="_edit"]').find("[id*='btnExit_GlassHolder']");
  }
  getEmailAddButtonEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find("[data-testid*='button_email']");
  }
  getPhoneAddButtonEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find("[data-testid='button_phone.add']");
  }
  getVerbHeader() {
    return cy.get('div[id*=_lblDisplayName]');
  }
  getExitButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[id*=_btnExit]');
  }
  getPlansLink() {
    return cy.findByRole('link', { name: 'Plans' });
  }
  getConfirmButtonPopup() {
    return cy.get('button[id*="_btnConfirm"]');
  }

  getNoOfPhone() {
    return cy.iframe('iframe[id*="cctRenderURL"]').get('.MuiPhoneNumber-root > div').its('length');
    // .get('.MuiPhoneNumber-root > div').should('have.length', 2);
    // .find('[data-testid="input_email.0.value"]');
    // .find("[data-testid=`input_email.${emailRow}.value`]");
    // .find('[data-testid="input_email.REPLACE_ROW.value"]'.replace("REPLACE_ROW",emailRow));
  }
  getEmailTextBox() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[data-testid="input_email.0.value"]');
        // .find("[data-testid=`input_email.${emailRow}.value`]");
        .find('[data-testid="input_email.REPLACE_ROW.value"]'.replace('REPLACE_ROW', emailRow))
    );
  }
  deleteEmail() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[data-testid="input_email.0.value"]');
        // .find("[data-testid=`input_email.${emailRow}.value`]");
        .find('[data-testid="email.REPLACE_ROW.remove"]'.replace('REPLACE_ROW', emailRow))
    );
  }
  deletePhone() {
    return cy
      .iframe('iframe[id*="cctRenderURL"]')
      .find('[data-testid="phone.REPLACE_ROW.remove"]'.replace('REPLACE_ROW', phoneRow));
  }
  deleteConfirmButton() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find("[data-testid='button_confirm_delete']");
  }

  getEmailUsage() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[id="mui-component-select-email.0.usage"]');
        .find('[data-testid="input_email.REPLACE_ROW.usage"]'.replace('REPLACE_ROW', emailRow))
    );
  }
  getSelectEmailUsage() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[role=listbox]');
  }
  getEmailPreffered() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[data-testid="checkbox_email.0.preferred"]');
        .find('[data-testid="checkbox_email.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', emailRow))
    );
  }
  getCustomerProfileFrame() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find("[id='root']");
  }
  getEmailTextBoxEdit() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="input_email.REPLACE_ROW.value"]'.replace('REPLACE_ROW', emailRow));
  }
  getEmailUsageEdit() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="input_email.REPLACE_ROW.usage"]'.replace('REPLACE_ROW', emailRow));
  }
  getSelectEmailUsageEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[role=listbox]');
  }
  getEmailPrefferedEdit() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="checkbox_email.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', emailRow));
  }
  getEmailPrefferedEditValue() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
        // .find('[data-testid="checkbox_phone.0.preferred"]');
        .find('[name="email.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', emailRow))
    );
  }

  getPhoneTextBox() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[name="phone.0.value"]');
        .find('[name="phone.REPLACE_ROW.value"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getPhoneType() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[id="mui-component-select-phone.0.type"]');
        .find('[data-testid="input_phone.REPLACE_ROW.type"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getPhoneUsage() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[id="mui-component-select-phone.0.usage"]');
        .find('[data-testid="input_phone.REPLACE_ROW.usage"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getSelectPhoneOption() {
    return cy.iframe('iframe[id*="cctRenderURL"]').find('[role=listbox]');
    // return cy.iframe('iframe[id*="cctRenderURL"]')
    // .find('[data-testid="input_phone.REPLACE_ROW.usage"]'.replace("REPLACE_ROW",phoneRow));
  }
  getPhonePreferred() {
    return (
      cy
        .iframe('iframe[id*="cctRenderURL"]')
        // .find('[data-testid="checkbox_phone.0.preferred"]');
        .find('[data-testid="checkbox_phone.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getPhoneTextBoxEdit() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
        // .find('[name="phone.0.value"]');
        .find('[name="phone.REPLACE_ROW.value"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getPhoneTypeEdit() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="input_phone.REPLACE_ROW.type"]'.replace('REPLACE_ROW', phoneRow));
  }
  getPhoneUsageEdit() {
    return cy
      .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
      .find('[data-testid="input_phone.REPLACE_ROW.usage"]'.replace('REPLACE_ROW', phoneRow));
  }
  getSelectPhoneOptionEdit() {
    return cy.iframe('iframe[id*="_cctRenderURL"][src*="_edit"]').find('[role=listbox]');
    // return cy.iframe('iframe[id*="cctRenderURL"]')
    // .find('[data-testid="input_phone.REPLACE_ROW.usage"]'.replace("REPLACE_ROW",phoneRow));
  }
  getPhonePreferredEdit() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
        // .find('[data-testid="checkbox_phone.0.preferred"]');
        .find('[data-testid="checkbox_phone.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', phoneRow))
    );
  }

  getPhonePreferredEditValue() {
    return (
      cy
        .iframe('iframe[id*="_cctRenderURL"][src*="_edit"]')
        // .find('[data-testid="checkbox_phone.0.preferred"]');
        .find('[name="phone.REPLACE_ROW.preferred"]'.replace('REPLACE_ROW', phoneRow))
    );
  }
  getWrapupButton() {
    return cy.get('button[id*="_btnWrapup"]');
  }
  getWrapupConfirmButton() {
    return cy.get('button[id*=_btnConfirm]');
  }
  getWrapupAction() {
    return cy.get('select[id*=_optReasonCodes]');
  }
  //#yui-gen6 > a
  getConfirmWrapupPopup() {
    return cy.get('[id*=_window_h]');
  }
  getConfirmWrapUpOk() {
    return cy.get('[id*=_btnOK');
  }
  getHomeLink() {
    // return cy.get('[id*=_tfhPerspectivestag1]');
    return cy.get("[title='Home']");
  }
}
export default CommonPO;
