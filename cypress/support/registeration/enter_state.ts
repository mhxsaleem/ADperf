import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomerPage = new RegisterCustomerPage();

export const enterState = (st: string) => {
  // registerCustomerPage.getState().should('be.visible').clear();
  if (st.length >= 1) {
    registerCustomerPage.getState().should('be.visible').clear();
    // registerCustomerPage.getState().type(st);
    registerCustomerPage.getState().type(st).wait(5000).type('{downarrow}').wait(2000).type('{enter}');
  }
};

export const editState = (st: string) => {
  // registerCustomerPage.getState().should('be.visible').clear();
  if (st.length >= 1) {
    registerCustomerPage.editState().should('be.visible').clear();
    // registerCustomerPage.editState().type(st);
    registerCustomerPage.editState().type(st).wait(5000).type('{downarrow}').wait(2000).type('{enter}');
  }
};
