import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const selectBrand = (brand: string) => {
  // if (brand.length >= 1) {
  //   registerItemPage.selectItemBrandDropdown().should('be.visible').click();
  //   registerItemPage.selectItemBrand().click({ force: true });
  //   registerItemPage
  //     .selectItemBrand()
  //     .children('li')
  //     .each(($el) => {
  //       if ($el.text() === brand) {
  //         cy.wrap($el).click();
  //       }
  //     });
  // }

  if (brand.length >= 1) {
    registerItemPage.selectItemBrandDropdown().should('be.visible');
    registerItemPage.selectItemBrandDropdown().type(brand).wait(2000).type('{downarrow}').type('{enter}').wait(1000);
  }
};
