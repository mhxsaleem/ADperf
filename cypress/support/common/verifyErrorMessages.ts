import CommonPO from '../pageObjects/common-po';
const commonPO = new CommonPO();

export const verifyErrorMessages = (error) => {
  commonPO
    .getValidationMessages()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain(error);
    });
};
