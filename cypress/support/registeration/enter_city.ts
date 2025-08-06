import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomer = new RegisterCustomerPage();

export const enterCity = (ct: string) => {
  // registerCustomer.getCity().should('be.visible').clear();
  if (ct.length >= 1) {
    registerCustomer.getCity().should('be.visible').clear();
    registerCustomer.getCity().type(ct);
  }
};

export const editCity = (ct: string) => {
  // registerCustomer.getCity().should('be.visible').clear();
  if (ct.length >= 1) {
    registerCustomer.editCity().should('be.visible').clear();
    registerCustomer.editCity().type(ct);
  }
};
