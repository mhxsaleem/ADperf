import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const selectItemAddressAsSavedAddress = (item_address_same: string, saved_address: string) => {
  if (item_address_same === 'Yes') {
    registerItemPage.itemAddressSame().scrollIntoView().should('be.visible').click();
  } else {
    registerItemPage.itemAddressDifferent().scrollIntoView().should('be.visible').click();
    if (saved_address === 'Yes') {
      registerItemPage.savedAddressYes().scrollIntoView().should('be.visible').click();
    } else if (saved_address === 'No') {
      registerItemPage.savedAddressNo().scrollIntoView().should('be.visible').click();
    }
  }
};

export const selectAddress = (saved_address: string, address: string) => {
  registerItemPage.selectAddressDropdown().should('be.visible').click();
  // registerItemPage.selectAddressDropdown().should('be.visible').click();
  // registerItemPage
  //   .selectAddressDropdown()
  //   .should('be.visible')
  //   .click({ force: true }); // - For offers this is not required. Check if any other test fail
  if (saved_address === 'Yes') {
    if (address.length >= 4) {
      registerItemPage.selectItemAddress().click({ force: true });
      let found = false;
      registerItemPage
        .selectItemAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    } else if (address.length < 4) {
      registerItemPage.selectItemAddress().click({ force: true });
      let found = false;
      registerItemPage
        .selectItemAddress()
        .children('li')
        .each(($el, index, $rows) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === 'Saved Mailing Addresses'.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($rows[index + 1]).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  } else if (saved_address === 'No') {
    registerItemPage.getItemAddress().should('be.visible');
    if (address.length >= 1) {
      registerItemPage.getItemAddress().click();
      registerItemPage.getItemAddress().clear().type(address).wait(5000);
    }

    itemMailingAddress('Yes', address);
  }
};

export const selectAddressBillingAddress = (saved_address: string, address: string) => {
  registerItemPage.selectAddressDropdown().should('be.visible').click().wait(2000);
  // registerItemPage.selectAddressDropdown().should('be.visible').click();
  // registerItemPage
  //   .selectAddressDropdown()
  //   .should('be.visible')
  //   .click({ force: true }); // - For offers this is not required. Check if any other test fail
  if (saved_address === 'Yes') {
    if (address.length >= 4) {
      registerItemPage.selectItemAddress().click({ force: true });
      let found = false;
      registerItemPage
        .selectItemAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    } else if (address.length < 4) {
      registerItemPage.selectItemAddress().click({ force: true }).wait(2000);
      let found = false;
      registerItemPage
        .selectItemAddress()
        .children('li')
        .each(($el, index, $rows) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === 'Saved Mailing Addresses'.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($rows[index + 1]).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  } else if (saved_address === 'No') {
    registerItemPage.getBillingAddress().should('be.visible');
    if (address.length >= 1) {
      registerItemPage.getBillingAddress().click();
      registerItemPage.getBillingAddress().clear().type(address).wait(5000);
    }

    itemMailingAddress('Yes', address);
  }
};

export const addMailingAddress = (lookup: string, address: string) => {
  if (lookup === 'Yes') {
    if (address.length >= 1) {
      registerItemPage.selectCustomerAddress().click({ force: true });
      let found = false;
      registerItemPage
        .selectCustomerAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  }
};

export const itemMailingAddress = (lookup: string, address: string) => {
  if (lookup === 'Yes') {
    if (address.length >= 1) {
      registerItemPage.selectItemAddress().click({ force: true });
      let found = false;
      registerItemPage
        .selectItemAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  }
};

export const editMailingAddress = (lookup: string, address: string) => {
  if (lookup === 'Yes') {
    if (address.length >= 1) {
      registerItemPage.getManualAddressEditCustomer().click({ force: true });
      let found = false;
      registerItemPage
        .getManualAddressEditCustomer()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress === address) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  }
};
