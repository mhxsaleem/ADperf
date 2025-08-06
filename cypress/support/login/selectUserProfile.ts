import LoginPagePO from '../pageObjects/login-po';
const loginPagePO = new LoginPagePO();

export const selectUserProfile = (profile: string) => {
  loginPagePO
    .profileSelectWindow()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.equal('Select Profile');
    });
  cy.contains(profile).should('be.visible').click();
  loginPagePO.profileSelectButton().should('be.enabled').click();
  try {
    if (loginPagePO.loginExistsPopup()) {
      loginPagePO
        .loginExistsPopup()
        .should('exist')
        .then(() => {
          // Check if the "Continue" button is visible and enabled
          loginPagePO.continueLogin().should('exist').should('be.visible').should('not.be.disabled').click(); // Click the "Continue" button
        });
    } else {
      new Error();
    }
  } catch (e) {
    cy.log('Concurrent login popup not present ');
  }
};
