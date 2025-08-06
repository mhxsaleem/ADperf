import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomerPage = new RegisterCustomerPage();

export const selectMarketingPreferences = (preferences: string) => {
  const preferenceList = preferences.split(',');
  for (const pref of preferenceList) {
    switch (pref.trim()) {
      case 'mail':
        registerCustomerPage.getMailCheckBox().should('not.be.checked').check();
        break;
      case 'email':
        registerCustomerPage.getEmailCheckBox().should('not.be.checked').check();
        break;
      case 'call':
        registerCustomerPage.getCallCheckbox().should('not.be.checked').check();
        break;
      case 'SMS':
        registerCustomerPage.getSmsCheckBox().should('not.be.checked').check();
        break;
    }
  }
};

export const editMarketingPreferences = (preferences: string) => {
  const preferenceList = preferences.split(',');
  for (const pref of preferenceList) {
    switch (pref.trim()) {
      case 'mail':
        registerCustomerPage.editMailCheckBox().should('not.be.checked').check();
        break;
      case 'email':
        registerCustomerPage.editEmailCheckBox().should('not.be.checked').check();
        break;
      case 'call':
        registerCustomerPage.editCallCheckbox().should('not.be.checked').check();
        break;
      case 'SMS':
        registerCustomerPage.editSmsCheckBox().should('not.be.checked').check();
        break;
    }
  }
};

export const checkMarketingPreferences = (preferences: string) => {
  const preferenceList = preferences.split(',');
  for (const pref of preferenceList) {
    switch (pref.trim()) {
      case 'mail':
        registerCustomerPage.editMailCheckBox().should('be.checked');
        break;
      case 'email':
        registerCustomerPage.editEmailCheckBox().should('be.checked');
        break;
      case 'call':
        registerCustomerPage.editCallCheckbox().should('be.checked');
        break;
      case 'SMS':
        registerCustomerPage.editSmsCheckBox().should('be.checked');
        break;
    }
  }
};

export const toggleMarketingPreferences = (preferences: string) => {
  const preferenceList = preferences.split(',');
  for (const pref of preferenceList) {
    switch (pref.trim()) {
      case 'mail':
        registerCustomerPage
          .editMailCheckBox()
          .invoke('prop', 'checked')
          .then((ischecked) => {
            cy.log('ischecked' + ischecked);
          });
        registerCustomerPage.editMailCheckBox().should('not.be.checked').check();
        break;
      case 'email':
        registerCustomerPage
          .editEmailCheckBox()
          .invoke('prop', 'checked')
          .then((ischecked) => {
            cy.log('ischecked' + ischecked);
          });
        registerCustomerPage.editEmailCheckBox().should('not.be.checked').check();
        break;
      case 'call':
        registerCustomerPage.editCallCheckbox().should('not.be.checked').check();
        break;
      case 'SMS':
        registerCustomerPage.editSmsCheckBox().should('not.be.checked').check();
        break;
    }
  }
};
