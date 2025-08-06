import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomer = new RegisterCustomerPage();

export const enterZipCode = (zip: string) => {
  // registerCustomer.getZipCode().should('be.visible').clear();
  if (zip.length >= 1) {
    registerCustomer.getZipCode().should('be.visible').clear();
    registerCustomer.getZipCode().type(zip);
  }
};

export const editZipCode = (zip: string) => {
  // registerCustomer.getZipCode().should('be.visible').clear();
  if (zip.length >= 1) {
    registerCustomer.editZipCode().should('be.visible').clear();
    registerCustomer.editZipCode().type(zip);
  }
};
