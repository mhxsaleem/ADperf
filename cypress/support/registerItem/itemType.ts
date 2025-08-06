import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const itemType = (item_type: string) => {
  // if (item_type.length >= 1) {
  //   registerItemPage.selectItemTypeDropdown().should('be.visible').click();
  //   registerItemPage.selectItemType().click({ force: true });
  //   registerItemPage
  //     .selectItemType()
  //     .children('li')
  //     .each(($el) => {
  //       if ($el.text() === item_type) {
  //         cy.wrap($el).click();
  //       }
  //     });
  // }
  if (item_type.length >= 1) {
    registerItemPage.selectItemTypeDropdown().should('be.visible');
    registerItemPage.selectItemTypeDropdown().type(item_type).wait(2000).type('{downarrow}').type('{enter}').wait(1000);
  }
};
