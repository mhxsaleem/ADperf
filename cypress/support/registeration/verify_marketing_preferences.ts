import RegisterCustomerPage from '../pageObjects/register-customer-po';
const registerCustomerPage = new RegisterCustomerPage();
export const verifyMarketingPreferences = (preferences: string) => {
  const preferenceList = preferences.split(',');
  for (const pref in preferenceList) {
    switch (pref.trim()) {
      case 'mail':
        registerCustomerPage.getMailCheckBox().should('be.checked');
        break;
      case 'email':
        registerCustomerPage.getEmailCheckBox().should('be.checked');
        break;
      case 'call':
        registerCustomerPage.getCallCheckbox().should('be.checked');
        break;
      case 'SMS':
        registerCustomerPage.getSmsCheckBox().should('be.checked');
        break;
    }
  }
};
