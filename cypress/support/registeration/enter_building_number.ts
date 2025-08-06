import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomer = new RegisterCustomerPage();
export const enterBuildingNumber = (buildingNum: string) => {
  // registerCustomer.getBuildingNumber().should('be.visible').clear();
  if (buildingNum.length >= 1) {
    registerCustomer.getBuildingNumber().should('be.visible').clear();
    registerCustomer.getBuildingNumber().type(buildingNum);
  }
};

export const enterPoBox = (PONum: string) => {
  // registerCustomer.getBuildingNumber().should('be.visible').clear();
  if (PONum.length >= 1) {
    registerCustomer.getPoBox().should('be.visible').clear();
    registerCustomer.getPoBox().type(PONum);
  }
};

export const editBuildingNumber = (buildingNum: string) => {
  // registerCustomer.getBuildingNumber().should('be.visible').clear();
  if (buildingNum.length >= 1) {
    registerCustomer.editBuildingNumber().should('be.visible').clear();
    registerCustomer.editBuildingNumber().type(buildingNum);
  }
};
