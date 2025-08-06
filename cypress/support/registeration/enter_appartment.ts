import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomerPage = new RegisterCustomerPage();
export const enterAppartment = (appart: string) => {
  // registerCustomerPage.getAppartment().should('be.visible').clear();
  if (appart.length >= 1) {
    registerCustomerPage.getAppartment().should('be.visible').clear();
    registerCustomerPage.getAppartment().type(appart);
  }
};

export const editAppartment = (appart: string) => {
  // registerCustomerPage.getAppartment().should('be.visible').clear();
  if (appart.length >= 1) {
    registerCustomerPage.editAppartment().should('be.visible').clear();
    registerCustomerPage.editAppartment().type(appart);
  }
};
