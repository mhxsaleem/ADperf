import LoginPagePO from '../pageObjects/login-po';
import { enterPassword } from './enterPassword';
import { enterUsername } from './enterUsername';
const loginPagePO = new LoginPagePO();
export const loginUser = (username: string, password: string) => {
  enterUsername(username);
  enterPassword(password);
  loginPagePO.loginButton().should('be.visible').click();
  loginPagePO.profileSelectWindow().should('be.visible');
};
