import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomer = new RegisterCustomerPage();

export const enterStreet = (st: string) => {
  // registerCustomer.getStreet().should('be.visible').clear();
  if (st.length >= 1) {
    registerCustomer.getStreet().should('be.visible').clear();
    registerCustomer.getStreet().type(st);
  }
};

export const editStreet = (st: string) => {
  // registerCustomer.getStreet().should('be.visible').clear();
  if (st.length >= 1) {
    registerCustomer.editStreet().should('be.visible').clear();
    registerCustomer.editStreet().type(st);
  }
};
