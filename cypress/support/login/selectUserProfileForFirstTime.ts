import LoginPagePO from '../pageObjects/login-po';
const loginPagePO = new LoginPagePO();
export const selectUserProfileForFirstTime = (profile: string) => {
  loginPagePO
    .profileSelectWindow()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.equal('Select Profile');
    });
  cy.contains(profile).should('be.visible').click();
  loginPagePO.profileSelectButton().should('be.enabled').click();
};
