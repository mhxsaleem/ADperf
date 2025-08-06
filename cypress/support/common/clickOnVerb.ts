import CommonPO from '../pageObjects/common-po';
import EmailPO from '../pageObjects/email-po';
import HomePage from '../pageObjects/home-page-po';
const commonPO = new CommonPO();
const emailPO = new EmailPO();
const homePage = new HomePage();

export const clickOnVerb = (verb: string) => {
  switch (verb) {
    case 'email':
      emailPO.getEmailLink().should('be.visible').click();
      break;
    case 'add item':
      homePage.registerItemLink().should('be.visible').click();
      break;
    case 'plans':
      commonPO.getPlansLink().should('be.visible').click();
      break;
  }
};
