import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();
export const selectWorkingOrder = (working_order: string, damage_from_incident: string) => {
  cy.log('working_order' + working_order + damage_from_incident);
  if (working_order === 'Yes') {
    registerItemPage.selectWorkingOrderYes().should('be.visible').click();
  } else {
    registerItemPage.selectWorkingOrderNo().should('be.visible').click();
    if (damage_from_incident === 'Yes') {
      registerItemPage.accidentalDamageTrue().should('be.visible').click();
    } else if (damage_from_incident === 'No') {
      registerItemPage.accidentalDamageFalse().should('be.visible').click();
    }
  }
};

export const verifyItemWorkingOrder = (working_order: string, damage_from_incident: string) => {
  cy.log('working_order' + working_order + damage_from_incident);
  if (working_order === 'Yes') {
    registerItemPage.verifyWorkingOrderYes().should('be.visible').click();
  } else {
    registerItemPage.verifyWorkingOrderNo().should('be.visible').click();
    if (damage_from_incident === 'Yes') {
      registerItemPage.verifyaccidentalDamageTrue().should('be.visible').click();
    } else if (damage_from_incident === 'No') {
      registerItemPage.verifyaccidentalDamageFalse().should('be.visible').click();
    }
  }
};
