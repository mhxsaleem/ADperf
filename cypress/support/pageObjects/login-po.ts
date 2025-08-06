class LoginPagePO {
  usernamePO() {
    return cy.get('#userName');
  }
  passwordPO() {
    return cy.get('#password');
  }
  loginButton() {
    return cy.get('#loginButton');
  }
  profileSelectWindow() {
    return cy.get('#popup_4_window_h');
  }
  profileSelectButton() {
    return cy.get('button[id*=_btnSelect]');
  }
  profileCancelButton() {
    return cy.get('button[id*=_btnCancel]');
  }
  loginExistsPopup() {
    return cy.get('#ConcurrentLoginOptionsForm');
  }
  continueLogin() {
    return cy.get('button[id*=_btnContinue]');
  }
}
export default LoginPagePO;
