import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterItemNewAddress = (new_address: string) => {
  registerItemPage.NewAddressForItem().should('be.visible');
  if (new_address.length >= 1) {
    registerItemPage.NewAddressForItem().focus().clear().type(new_address).wait(5000).type('{enter}').wait(5000);
    // .click();
  }
};
