import LoginPagePO from '../pageObjects/login-po';
const loginPagePO = new LoginPagePO();

export const enterUsername = (username) => {
  if (username.length >= 1) {
    loginPagePO.usernamePO().should('be.visible').should('be.enabled').clear().type(username);
  }
};
