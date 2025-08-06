import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterPurchasePrice = (purchase_price: string) => {
  registerItemPage.inputPurchasePrice().should('be.visible');
  if (purchase_price.length >= 1) {
    registerItemPage.inputPurchasePrice().clear().type(purchase_price);
  }
};
