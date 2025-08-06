import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const selectExtendedPlan = (extended_plan: string) => {
  if (extended_plan === 'Yes') {
    registerItemPage.selectExtendedPlanYes().scrollIntoView().should('be.visible').click();
  } else {
    registerItemPage.selectExtendedPlanNo().scrollIntoView().should('be.visible').click();
  }
};
