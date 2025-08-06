import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterItemPurchaseDate = (date_received: string) => {
  registerItemPage.inputItemReceivedDate().should('be.visible');
  if (date_received.length >= 1) {
    registerItemPage.inputItemReceivedDate().clear().type(date_received);
  }
};
