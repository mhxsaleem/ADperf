import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterSerialNumber = (serial_number: string) => {
  registerItemPage.inputSerialNumber().should('be.visible');
  if (serial_number.length >= 1) {
    // registerItemPage.inputSerialNumber().clear().type(serial_number);
    registerItemPage.inputSerialNumber().type(serial_number);
  }
};
export const editSerialNumber = (serial_number: string) => {
  registerItemPage.editSerialNumber().should('be.visible');
  if (serial_number.length >= 1) {
    registerItemPage.editSerialNumber().clear().type(serial_number);
  }
};

export const enterSerialNumberSr = (serial_number: string) => {
  registerItemPage.inputSerialNumberSr().should('be.visible');
  if (serial_number.length >= 1) {
    registerItemPage.inputSerialNumberSr().clear().type(serial_number);
  }
};

export const validateSerialNumber = (serial_number: string) => {
  registerItemPage.editSerialNumber().should('be.visible');
  if (serial_number.length >= 1) {
    registerItemPage.editSerialNumber().should('have.value', serial_number);
  }
};
