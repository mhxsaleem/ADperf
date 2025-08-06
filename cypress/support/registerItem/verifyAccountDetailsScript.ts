import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const verifyAccoutDetailsScript = () => {
  registerItemPage
    .verifyDetailsScriptMessage()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.equal(`Thank you for calling Whirlpool registrations.
        My name is ${Cypress.env(
          'agentUsername',
        )}, are you calling to register an appliance today?  Fantastic, I can help you with that! Let me start by asking for some of your information: 
        May I please confirm your information: First/Last name? Phone number? Email address? Lastly, your mailing address.`);
    });
};
