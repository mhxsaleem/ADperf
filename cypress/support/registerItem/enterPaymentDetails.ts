import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterAccountNumber = (inputValue: string) => {
  registerItemPage.inputAccountNumber().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.inputAccountNumber().clear().type(inputValue);
  }
};

export const enterRoutingNumber = (inputValue: string) => {
  registerItemPage.inputRoutingNumber().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.inputRoutingNumber().clear().type(inputValue);
  }
};

export const enterAccountName = (inputValue: string) => {
  registerItemPage.inputAccountName().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.inputAccountName().clear().type(inputValue);
  }
};

export const enterAccountNumberMBA = (inputValue: string) => {
  registerItemPage.mbainputAccountNumber().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.mbainputAccountNumber().clear().type(inputValue);
  }
};

export const enterRoutingNumberMBA = (inputValue: string) => {
  registerItemPage.mbainputRoutingNumber().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.mbainputRoutingNumber().clear().type(inputValue);
  }
};

export const enterAccountNameMBA = (inputValue: string) => {
  registerItemPage.mbainputAccountName().should('be.visible');
  if (inputValue.length >= 1) {
    registerItemPage.mbainputAccountName().clear().type(inputValue);
  }
};

// export const enterAccountName = (inputValue: string) => {
//   registerItemPage.inputAccountName().should('be.visible');
//   if (inputValue.length >= 1) {
//     registerItemPage.inputAccountName().should('have.value',inputValue);
//   }
// };

export const selectAccountType = (item_type: string) => {
  if (item_type.length >= 1) {
    registerItemPage.selectAccountType().should('be.visible').click();
    registerItemPage.selectAccountlistBox().click({ force: true });
    registerItemPage
      .selectAccountlistBox()
      .children('li')
      .each(($el) => {
        if ($el.text() === item_type) {
          cy.wrap($el).click();
        }
      });
  }
};

export const selectAccountTypeMBA = (item_type: string) => {
  if (item_type.length >= 1) {
    registerItemPage.mbaselectAccountType().should('be.visible').click();
    registerItemPage.mbaselectAccountlistBox().click({ force: true });
    registerItemPage
      .mbaselectAccountlistBox()
      .children('li')
      .each(($el) => {
        if ($el.text() === item_type) {
          cy.wrap($el).click();
        }
      });
  }
};
