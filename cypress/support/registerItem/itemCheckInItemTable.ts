import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();
export const selectWorkingOrder = (working_order: string, damage_from_incident: string) => {
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

// export const returnStringMatch = (index: any): string => {
//     if (working_order === "Yes") {
//         registerItemPage.selectWorkingOrderYes().should("be.visible").click();
//     } else {
//         registerItemPage.selectWorkingOrderNo().should("be.visible").click();
//         if (damage_from_incident === "Yes") {
//             registerItemPage.accidentalDamageTrue().should("be.visible").click();
//         } else if (damage_from_incident === "No") {
//             registerItemPage.accidentalDamageFalse().should("be.visible").click();
//         }
//     }
// }
