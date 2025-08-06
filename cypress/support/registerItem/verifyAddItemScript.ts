import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const verifyAddItemScript = () => {
  registerItemPage
    .addItemScriptMessage()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain(
        `Thank you for that. Now, let’s move onto your new appliance. How many appliances are you calling to register with me today?`,
      );

      expect(text).to.contain(`Do you happen to have your registration card in front of you?`);
    });
};
