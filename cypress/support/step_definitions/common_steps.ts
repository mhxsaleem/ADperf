/// reference types="cypress-xpath"

import utils from '@/support/commonlibs/cypressutils';
import { Before, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { clickOnVerb } from '../common/clickOnVerb';
import { randStr } from '../common/random_string';
import { selectUserProfile } from '../login/selectUserProfile';
import { selectUserProfileForFirstTime } from '../login/selectUserProfileForFirstTime';
import { userProfile } from '../login/userProfile';
import CommonPO from '../pageObjects/common-po';
import CustomerProfilePage from '../pageObjects/customer-profile-po';
import EmailPO from '../pageObjects/email-po';
import HomePage from '../pageObjects/home-page-po';
import RegisterCustomerPage from '../pageObjects/register-customer-po';
import RegisterItemPage from '../pageObjects/register-item-po';
import SearchCustomerPage from '../pageObjects/search-customer-po';
import { editAppartment, enterAppartment } from '../registeration/enter_appartment';
import { editBuildingNumber, enterBuildingNumber, enterPoBox } from '../registeration/enter_building_number';
import { editCity, enterCity } from '../registeration/enter_city';
import { editState, enterState } from '../registeration/enter_state';
import { editStreet, enterStreet } from '../registeration/enter_street';
import { editZipCode, enterZipCode } from '../registeration/enter_zip_code';
import { getMatchingDataJson } from '@/support/common/csv_util';
let firstname_rs: string;
let lastname_rs: string;
const homePage = new HomePage();
const searchCustomerPage = new SearchCustomerPage();
const customerProfilePage = new CustomerProfilePage();
const commonPO = new CommonPO();
const emailPO = new EmailPO();
const registerItemPage = new RegisterItemPage();
const registerCustomerPage = new RegisterCustomerPage();

beforeEach(() => {
  // cy.clearCookie;
  // cy.clearLocalStorage;
  cy.clearAllLocalStorage;
  cy.clearAllCookies;
  cy.intercept('GET', 'v2/USA/person?surname=*&clientCode=*').as('searchBySurnameAndClientCodeAPIRequest');
  cy.intercept('GET', 'v2/USA/person?phone=*&clientCode=*').as('searchByPhoneAndClientCodeAPIRequest');
  cy.intercept('GET', 'v2/USA/person?email=*&clientCode=*').as('searchByEmailAndClientCodeAPIRequest');
  cy.intercept('GET', 'v2/USA/person?surname=*&postalCode=*&clientCode=*').as(
    'searchBySurnamePostCodeAndClientCodeAPIRequest',
  );
  cy.intercept('GET', 'v2/USA/person?surname=*&firstName=*&clientCode=*').as(
    'searchBySurnameFirstnameAndClientCodeAPIRequest',
  );
  cy.intercept('GET', 'v2/USA/person?contractReference=*&surname=*&clientCode=*').as(
    'searchByPlannumberSurnameAndClientCodeAPIRequest',
  );
  cy.intercept('GET', 'v2/USA/person?surname=*&postalCode=*&address=*&clientCode=*').as(
    'searchBySurnamePostalCodeAddressAndClientCodeAPIRequest',
  );
  cy.intercept('GET', 'v2/USA/person?postalCode=*&address=*&clientCode=*').as(
    'searchByPostalCodeAddressAndClientCodeAPIRequest',
  );
});

Before(() => {
  firstname_rs = randStr();
  lastname_rs = randStr();
});

Given('user has navigated to customer search screen', () => {
  homePage.getTaskLauncher().should('be.visible');
  homePage.getIdentifyCustomerLink().should('be.visible').click();
  searchCustomerPage
    .getIdentifyCustomerTitle()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.equal('Identify Customer');
    });
  cy.frameLoaded('iframe[id*="cctRenderURL"]');
  // searchCustomerPage.getClientLabel().should('be.visible');
  searchCustomerPage.getEmailAddressLabel().should('be.visible');
  searchCustomerPage.getPhoneNumberLabel().should('be.visible');
  searchCustomerPage.getFirstNameLabel().should('be.visible');
  searchCustomerPage.getLastNameLabel().should('be.visible');
  searchCustomerPage.getAddressLine1Label().should('be.visible');
  searchCustomerPage.getZipCodeLabel().scrollIntoView;
  searchCustomerPage.getZipCodeLabel().focus;
  searchCustomerPage.getZipCodeLabel().should('be.visible');
  searchCustomerPage.getPlanNumberLabel().should('be.visible');
  searchCustomerPage.getOfferReferenceLabel().should('be.visible');
  searchCustomerPage.getClearButton().should('be.visible');
  searchCustomerPage.getSearchButton().should('be.visible');
  searchCustomerPage.getNewCustomerButton().should('be.visible');
  searchCustomerPage.getSelectCustomerButton().should('be.visible');
});
Given('user selects to register an item', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.registerItemLink().should('be.visible').click();
});
Given('user selects to customer Profile', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.customerProfileLink().should('be.visible').click();
});

Given('user selects to cancel an item', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.cancelPlanLink().should('be.visible').click().wait(5000);
  registerItemPage
    .registerTitle()
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Cancel Plans');
    });
});

Given('user selects to manage billing account', () => {
  // homePage.mngBillingAccLink().should('be.visible').should('be.enabled').click();
  homePage.exitCustomerProfile().should('be.visible');
  homePage.exitCustomerProfile().click({ force: true }).wait(5000);
  homePage.mngBillingAccLink().should('be.visible').click();
  homePage.mngBillingExchangeIcon().should('be.visible').click();
});

Given('user exits Add Item Page', () => {
  // homePage.mngBillingAccLink().should('be.visible').should('be.enabled').click();
  // homePage.mngBillingAccLink().should('be.visible').click().wait(5000);
  homePage.exitManageBillingAccount().should('be.visible');
  homePage.exitManageBillingAccount().last().click({ multiple: true }).wait(2000);
  homePage.exitItemPageConfirm().click().wait(5000);
});

Given('user exits manage billing Overview Page', () => {
  homePage.exitManageBillingAccount().should('be.visible');
  homePage.exitManageBillingAccount().last().click({ multiple: true }).wait(2000);
});

Given('user exits to manage billing account', () => {
  // homePage.mngBillingAccLink().should('be.visible').should('be.enabled').click();
  homePage.mngBillingAccLink().should('be.visible').click().wait(2000);
  homePage.exitManageBillingAccount().should('be.visible');
  homePage.exitManageBillingAccount().first().click({ multiple: true }).wait(2000);
});

Given('user exits customer profile Page', () => {
  homePage.exitCustomerProfile().should('be.visible');
  homePage.exitCustomerProfile().click({ force: true }).wait(2000);
});

Given('user selects plans to view plan details', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.exitCustomerProfile().click({ force: true }).wait(5000);
  homePage.planLink().should('be.visible').click();
});

Given('user exits Page {string} in the window', (pageNo: string) => {
  homePage.exitCustomerProfile().eq(parseInt(pageNo)).should('be.visible');
  homePage.exitCustomerProfile().eq(parseInt(pageNo)).click({ force: true }).wait(5000);
});

Given('user exits Page {string} in the window And Confirm', (pageNo: string) => {
  homePage.exitCustomerProfile().eq(parseInt(pageNo)).should('be.visible');
  homePage.exitCustomerProfile().eq(parseInt(pageNo)).click({ force: true });
  homePage.exitItemPageConfirm().should('be.visible').click().wait(5000);
});

Then('user is navigated to {string} page', (pageTitle: string) => {
  registerItemPage
    .registerTitle()
    .invoke('text')
    .then((text) => {
      expect(text).to.contain(pageTitle);
    });
});

Given('user close the page', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();

  homePage.exitCustomerProfile().click({ force: true }).wait(5000);
});

Given('user selects to Edit an item', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.editItemLink().should('be.visible').click();
});

Given('user selects to Edit Customer', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.getEditCustomerLink().should('be.visible').click().wait(5000);
});

Given('user selects overview of an item', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  homePage.OverviewLink().should('be.visible').click().wait(2000);
});

Given('user selects exit cross mark', () => {
  // homePage.registerItemLink().should('be.visible').should('be.enabled').click();
  commonPO.getExitCrossMark().click({ force: true }).wait(2000);
});

When('user selects option {string}', (registration_card_available: string) => {
  if (registration_card_available === 'No') {
    registerItemPage.noRegistrationCardButton().should('be.visible').click();
  } else if (registration_card_available === 'Yes') {
    registerItemPage.hasRegistrationCardButton().should('be.visible');
  }
});
When('user selects the {string} client', (client: string) => {
  searchCustomerPage.getSelectClientDropdown().should('be.visible').click();

  searchCustomerPage.getSelectClient().click({ force: true });
  searchCustomerPage
    .getSelectClient()
    .children('li')
    .each(($el) => {
      cy.log('text: ' + $el.text().toUpperCase());
      if ($el.text().toUpperCase() === client) {
        cy.wrap($el).click();
      }
    });
});
Given('user clicks on Home link', () => {
  // commonPO.getHomeLink().should('be.visible').click();
  commonPO.getHomeLink().click({ force: true });
});

Given('user logs in with {string}', (profile: string) => {
  userProfile(profile);
});

Given('user navigates to login page', () => {
  utils.navigateUrl('GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false');

  getMatchingDataJson('cypress/fixtures/config.json', 'OOW_PAY_OPTION_SEQ').then((value) => {
    Cypress.env('OOW_SEQ', value);
  });
  getMatchingDataJson('cypress/fixtures/config.json', 'OOW_WAITTIME').then((value) => {
    Cypress.env('OOW_WAIT', value);
  });
  getMatchingDataJson('cypress/fixtures/config.json', 'VALID_EMAIL').then((value) => {
    Cypress.env('VALID_EMAIL', value);
  });
});

Given('user navigates to login page with sso', () => {
  utils.navigateUrl('GTConnect/UnifiedAcceptor/FrameworkDesktop.Main');
});

Given('user selects the {string}', (profile: string) => {
  selectUserProfile(profile);
});

Given('user selects the {string} for first time', (profile: string) => {
  selectUserProfileForFirstTime(profile);
});

When('user enters {string} for surname', (last_name: string) => {
  if (last_name.length >= 1) {
    last_name = last_name.concat(lastname_rs);
    searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type(last_name);
  }
});
When('user enters {string} for surname on customer search', (last_name: string) => {
  if (last_name.length >= 1) {
    searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type(last_name);
    Cypress.env('surname', last_name);
  }
});
When('user enters Cypressenvsurname for surname on customer search', () => {
  const last_name = Cypress.env('surname');
  if (last_name.length >= 1) {
    searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type(last_name);
  }
});
When('user enters {string} for offer reference and {string} for Zipcode', (offer: string, zipcode: string) => {
  if (offer.length >= 1) {
    searchCustomerPage.getOfferReferenceTextBox().should('be.visible').clear().type(offer);
  }

  if (zipcode.length >= 1) {
    searchCustomerPage.getZipcodeTextBox().should('be.visible').clear().type(zipcode);
  }
});
When('user enters {string} for plan number', (plan_number: string) => {
  if (plan_number.length >= 1) {
    searchCustomerPage.getPlanNumberTextBox().should('be.visible').clear().type(plan_number);
  }
});
Then('user is able to enter the {string} lastname', (lastname: string) => {
  lastname = lastname.concat(lastname_rs);

  searchCustomerPage.getLastNameTextBox().should('have.value', lastname);
});
When('user enters {string} as surname for new customer', (lastname: string) => {
  if (lastname.length >= 1) {
    lastname = lastname.concat(lastname_rs);
    searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type(lastname);
  }
});

When('user enters {string} for zipcode', (zipcode: string) => {
  if (zipcode.length >= 1) {
    searchCustomerPage.getZipCodeTextBox().should('be.visible').clear().type(zipcode);
  }
});

When('user selects to manually enter the address', () => {
  registerItemPage.selectCustomerAddressDropdown().should('be.visible').click();
  // registerItemPage.selectCustomerAddressDropdown().should('be.visible').click();
  registerCustomerPage.getManualAddressEdit().should('be.visible').click();
});

When('user selects to manually edit the address', () => {
  // registerItemPage.selectCustomerAddressEditDropdown().should('be.visible').click();
  registerItemPage.selectCustomerAddressEditDropdown().should('be.visible').click();

  registerCustomerPage.getManualAddressEditCustomer().should('be.visible').click();
});

When('user clicks on search button', () => {
  searchCustomerPage.getSearchButton().should('be.visible').click();
});

When(
  'user enters PO {string}, building number {string}, appartment {string}, street {string}, city {string}, state {string}, zipcode {string} and country {string} for  mailing address',
  (
    po_box: string,
    building_number: string,
    appartment: string,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    // country: string
  ) => {
    enterPoBox(po_box);
    enterBuildingNumber(building_number);
    enterAppartment(appartment);
    enterStreet(street);
    enterCity(city);
    enterState(state);
    enterZipCode(zipcode);
    // enterCountry(country); //Unable to edit the county

    registerCustomerPage.manualAddress_Done().should('be.visible').click();
  },
);

When(
  'user edits building number {string}, appartment {string}, street {string}, city {string}, state {string}, zipcode {string} and country {string} for  mailing address',
  (
    building_number: string,
    appartment: string,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    // country: string
  ) => {
    editBuildingNumber(building_number);
    editAppartment(appartment);
    editStreet(street);
    editCity(city);
    editState(state);
    editZipCode(zipcode);
    // enterCountry(country); //Unable to edit the county
    registerCustomerPage.manualAddressEdit_Done().should('be.visible').click();
  },
);

When(
  'user check building number {string}, appartment {string}, street {string}, city {string}, state {string}, zipcode {string} and country {string} for  mailing address',
  (building_number: string, appartment: string, street: string, city: string, state: string, zipcode: string) => {
    if (building_number.length >= 1) {
      registerCustomerPage
        .editBuildingNumber()
        .invoke('val')
        .then((value) => {
          cy.log('Building no: ' + value);
          expect(value).to.include(building_number);
        });
    }
    if (appartment.length >= 1) {
      registerCustomerPage
        .editAppartment()
        .invoke('val')
        .then((value) => {
          cy.log('appartment: ' + value);
          expect(value).to.include(appartment);
        });
    }
    if (street.length >= 1) {
      registerCustomerPage
        .editStreet()
        .invoke('val')
        .then((value) => {
          cy.log('street: ' + value);
          expect(value).to.include(street);
        });
    }
    if (city.length >= 1) {
      registerCustomerPage
        .editCity()
        .invoke('val')
        .then((value) => {
          cy.log('city: ' + value);
          expect(value).to.include(city);
        });
    }
    if (state.length >= 1) {
      registerCustomerPage
        .editState()
        .invoke('val')
        .then((value) => {
          cy.log('State: ' + value);
          expect(value).to.include(state);
        });
    }
    if (zipcode.length >= 1) {
      registerCustomerPage
        .editZipCode()
        .invoke('val')
        .then((value) => {
          cy.log('zipcode: ' + value);
          expect(value).to.include(zipcode);
        });
    }
    registerCustomerPage.manualAddressEdit_Done().should('be.visible').click();
  },
);
// Then(
//   'the system should display search result for {string}',
//   (surname: string) => {
//     // searchCustomerBySurname(surname);
//     // cy.get('@searchCustomerBySurnameResults').then(result:any=>{
//     //     cy.log(result).should('have.length.at.least', 1);
//     // })
//     searchCustomerPage
//       .getResultTable()
//       .should('be.visible')
//       .should('have.length.at.least', 1);
//   }
// );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Then('the system should display search result for {string}', (surname: string) => {
  // searchCustomerBySurname(surname);
  //   cy.get('@searchCustomerBySurnameResults').then(result:any=>{
  //       cy.log(result).should('have.length.at.least', 1);
  //   })
  // searchCustomerPage.getCustomerSearchResult().should('be.visible').should('have.length.at.least', 1);
});

Then('the system should display search result for Cypressenvsurname', () => {
  // const last_name = Cypress.env('surname');

  searchCustomerPage.getCustomerSearchResult().should('be.visible').should('have.length.at.least', 1);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Then('the system should display search result for surname {string}', (surname: string) => {
  // surname = surname.concat(lastname_rs);
  // searchCustomerBySurname(surname);
  // cy.get('@searchCustomerBySurnameResults').then(result:any=>{
  //     cy.log(result).should('have.length.at.least', 1);
  // })
  // searchCustomerPage
  //   .getResultTable()
  //   .should('be.visible')
  //   .should('have.length.at.least', 1);
  searchCustomerPage.getCustomerSearchResult().eq(0).click();
});

Then('user is displayed customer details', () => {
  customerProfilePage.customerDetails().should('be.visible');
});

// Then('registered Offer item is displayed in the customer profile', () => {
//   registerItemPage
//     .offerOrAddeditemTable()
//     .should('be.visible')
//     .should('have.length.at.least', 1);

//     registerItemPage.offerOrAddeditemTable().within(() => {
//     cy.get('tbody > tr:nth-child(1) > td:nth-child(1)')
//       .invoke('text')
//       .then((text) => {
//         cy.log('Invoke Data:' +text);
//       });
//     // cy.get('tbody > tr:nth-child(1)').click({ force: true });
//     });

//     registerItemPage.offerOrAddeditemTable().within(() => {
//       cy.get('tbody > tr:nth-child(1) > td:nth-child(1)')
//       .then((data) => {
//         const print = data.text();
//         cy.log('Then Data:' + print);
//       });

//     });
// });

Then('user logs off the WIB application', () => {
  homePage.getClosePerspectiveTab().click({ force: true });
  // cy.get('input[title*="Close Tab"]').then((element) => {
  //   cy.get('input[id*=tabButton]').click({ force: true });
  // });
  commonPO.getConfirmWrapupPopup().should('be.visible').click();
  // wrapupButton().should('be.visible').click();
  // wrapupAction().should('be.visible').select('Case Closed');
  commonPO.getWrapupConfirmButton().should('be.visible').click();
  homePage.userProfileAccordian().should('be.visible').click();
  homePage.logoutLink().should('be.visible').click();
  commonPO.getConfirmWrapupPopup().should('be.visible').click();
  commonPO.getWrapupConfirmButton().should('be.visible').click();
});

Then('user selects the displayed search', () => {
  // searchCustomerPage.getResultTable().within(() => {
  // cy.get('tbody > tr:nth-child(1) > td:nth-child(1)')
  //   .invoke('text')
  //   .then((text) => {
  //     cy.log(text);
  //   });
  // cy.get('tbody > tr:nth-child(1)').click({ force: true });
  // });
  searchCustomerPage.getCustomerSearchResult().eq(0).click();

  searchCustomerPage
    .getCustomerSearchResult()
    .eq(0)
    .then((data) => {
      const print = data.text();
      cy.log('Zero row data:' + print);
    });

  searchCustomerPage
    .getCustomerSearchResult()
    .eq(0)
    .within(() => {
      cy.get("[data-field='surname']").then((data) => {
        const surnameData = data.text();
        cy.log('Surname data: ' + surnameData);
      });
    });
  searchCustomerPage.getCustomerSearchResult().eq(0).dblclick();
});

When('user selects the customer', () => {
  // searchCustomerPage.getSelectCustomerButton().should('be.visible').click();
  // cy.wait(5000);
});
Then('user is navigated to customer profile page', () => {
  cy.wait(5000);
  customerProfilePage
    .customerProfileTitle()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Customer Profile');
    });
});
When('user clicks on the {string} verb', (verb: string) => {
  clickOnVerb(verb);
});
Then('user is navigated to email details page', () => {
  emailPO
    .getEmailHeader()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Compose Email');
    });
});

Then('user is navigated to Plans page', () => {
  commonPO
    .getVerbHeader()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Plans');
    });
});

When('user closes the add item page', () => {
  registerItemPage.itemExitButton().should('be.visible').click();
});

Then('user should be displayed message {string}', (message: string) => {
  registerItemPage
    .registerItemPopup()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain(message);
    });
});
When('when user clicks on confirm button', () => {
  commonPO.getConfirmButtonPopup().should('be.visible').click();
});

Then('user should be registered successfully for {string} and {string}', (firstname: string, lastname: string) => {
  firstname = firstname.concat(firstname_rs);
  lastname = lastname.concat(lastname_rs);

  cy.contains('Customer Profile').should('be.visible');

  commonPO.getCustomerProfileFrame().should('contain', lastname);
  commonPO.getCustomerProfileFrame().should('contain', firstname);

  // validatePersonDetailsInsertedInDB(firstname, lastname);

  // cy.get('@validatePersonDetailsInsertedInDB').then((result) => {

  //   cy.log('Inside allias');
  //   cy.log('Result Length: ' + result.length);
  //   cy.log('Result: ' + result[0]['per_gid']);
  //   cy.log('Result: ' + result[0]['per_cp_value'].includes('+12485906522'));
  //   cy.log('Result: ' + result[1]['per_cp_value'].includes('+12485906523'));
  //   cy.log('Result: ' + result[2]['per_cp_value']);
  //   cy.log('Result: ' + result[3]['per_cp_value']);
  // });
  Cypress.env('surname', lastname);
});

Then(
  'user should be registered successfully with phone {string} and email {string}',
  (phone: string, email: string) => {
    commonPO.getCustomerProfileFrame().should('contain', phone);
    commonPO.getCustomerProfileFrame().should('contain', email);
  },
);

Then('user is displayed error message {string}', (error_message: string) => {
  searchCustomerPage
    .getValidationPopup()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain(error_message);
    });
});

When('user enters {string} and {string} for customer', (firstname: string, lastname: string) => {
  if (firstname.length >= 1) {
    firstname = firstname.concat(firstname_rs);
    searchCustomerPage
      .getFirstNameTextBox()
      .should('be.visible')
      .clear({ force: true })
      .type(firstname, { force: true });
  }
  if (lastname.length >= 1) {
    lastname = lastname.concat(lastname_rs);
    searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type(lastname);
  }
});
