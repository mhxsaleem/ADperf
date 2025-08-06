import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomer = new RegisterCustomerPage();

export const enterCountry = (cntry: string) => {
  registerCustomer.getCountry().should('be.visible').clear();
  if (cntry.length >= 1) {
    registerCustomer.getCountry().type(cntry);
  }
};
