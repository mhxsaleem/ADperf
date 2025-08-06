import LoginPagePO from '../pageObjects/login-po';
const loginPagePO = new LoginPagePO();

export const enterPassword = (password: string) => {
  if (password.length >= 1) {
    loginPagePO.passwordPO().should('be.visible').should('be.enabled').clear().type(password);
  }
};
