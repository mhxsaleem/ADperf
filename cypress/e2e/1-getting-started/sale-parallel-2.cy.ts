/// <reference types="cypress" />
import 'cypress-iframe';
import { loginUser } from "../../support/login/loginUser";
import { selectUserProfile } from "../../support/login/selectUserProfile";
import HomePage from "../../support/pageObjects/home-page-po";
import SearchCustomerPage from "../../support/pageObjects/search-customer-po";
const homePage = new HomePage();
const searchCustomerPage = new SearchCustomerPage();
import CustomerProfilePage from "../../support/pageObjects/customer-profile-po";
const customerProfilePage = new CustomerProfilePage();
import RegisterItemPage from "../../support/pageObjects/register-item-po";
import { getPreviosDateFromCurrentDate } from '../../support/common/date_util';
import { selectBrand } from '../../support/registerItem/selectBrand';
import { enterModelNumber } from '../../support/registerItem/enterModelNumber';
import { itemType } from '../../support/registerItem/itemType';
import { enterItemPurchaseDate } from '../../support/registerItem/enterItemPurchaseDate';
import { enterPurchasePrice } from '../../support/registerItem/enterPurchasePrice';
import { enterSerialNumber } from '../../support/registerItem/enterSerialNumber';
import { selectExtendedPlan } from '../../support/registerItem/selectExtendedPlan';
import { selectWorkingOrder } from '../../support/registerItem/itemCheckInItemTable';
import { selectAddress } from '../../support/registerItem/selectItemAddreeAsSavedAddress';
const registerItemPage = new RegisterItemPage();
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Sales flow', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit('https://qa-external-alb.adp-qa.aws.domgencloud.net/GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false')
  })

  it('Login User and Verify Elements', () => {
    cy.visit('https://qa-external-alb.adp-qa.aws.domgencloud.net/GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false')
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // loginUser(Cypress.env('agentUsername'), Cypress.env('password'));
    loginUser("awsintegration", "automation0325");
    // selectUserProfile(profile);
    selectUserProfile("WIB Agent Profile");
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
  // searchCustomerPage.getPhoneNumberLabel().should('be.visible');
  // searchCustomerPage.getFirstNameLabel().should('be.visible');
  // searchCustomerPage.getLastNameLabel().should('be.visible');
  // searchCustomerPage.getAddressLine1Label().should('be.visible');
  // searchCustomerPage.getZipCodeLabel().scrollIntoView;
  // searchCustomerPage.getZipCodeLabel().focus;
  // searchCustomerPage.getZipCodeLabel().should('be.visible');
  // searchCustomerPage.getPlanNumberLabel().should('be.visible');
  // searchCustomerPage.getOfferReferenceLabel().should('be.visible');
  // searchCustomerPage.getClearButton().should('be.visible');
  // searchCustomerPage.getSearchButton().should('be.visible');
  // searchCustomerPage.getNewCustomerButton().should('be.visible');
  searchCustomerPage.getSelectCustomerButton().should('be.visible');

  //user selects the client
      searchCustomerPage.getSelectClientDropdown().should('be.visible').click();

  searchCustomerPage.getSelectClient().click({ force: true });
  searchCustomerPage
    .getSelectClient()
    .children('li')
    .each(($el) => {
      cy.log('text: ' + $el.text().toUpperCase());
      if ($el.text().toUpperCase() === "WHIRLPOOL") {
        cy.wrap($el).click();
      }
    });

    //user enters {string} for surname on customer search
  searchCustomerPage.getLastNameTextBox().should('be.visible').clear().type("ADPtestqafAugL");
  searchCustomerPage.getSearchButton().should('be.visible').click().wait(5000);

  // Wait for search results to load completely
  searchCustomerPage.getCustomerSearchResult().should('be.visible').and('have.length.at.least', 1);
  cy.wait(2000); // Additional wait for data to populate
  
  searchCustomerPage.getCustomerSearchResult().eq(0).click().wait(5000);

  searchCustomerPage
    .getCustomerSearchResult()
    .eq(0)
    .then((data) => {
      const print = data.text();
      cy.log('Zero row data:' + print);
    });

  // More robust surname data extraction with better error handling
  searchCustomerPage
    .getCustomerSearchResult()
    .eq(0)
    .within(() => {
      // Try to find surname data with extended timeout and fallback options
      cy.get('body').then(($body) => {
        if ($body.find("[data-field='surname']").length > 0) {
          // Original selector exists
          cy.get("[data-field='surname']").then((data) => {
            const surnameData = data.text();
            cy.log('Surname data: ' + surnameData);
          });
        } else {
          // Fallback: look for the surname text directly
          cy.log('data-field selector not found, using text search fallback');
          cy.contains('ADPtestqafAugL').then((data) => {
            const surnameData = data.text();
            cy.log('Surname data (fallback): ' + surnameData);
          });
        }
      });
    });
  searchCustomerPage.getCustomerSearchResult().eq(0).dblclick();

  cy.wait(5000);
  customerProfilePage
    .customerProfileTitle()
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Customer Profile');
    });

    customerProfilePage.customerDetails().should('be.visible');

    homePage.registerItemLink().should('be.visible').click();
    registerItemPage
    .registerTitle()
    .invoke('text')
    .then((text) => {
      expect(text).to.contain('Add Item');
    });

  //   cy.wait(10000);
  // registerItemPage.mutiStepper(0).should('have.text', 'Verify Account Details');
  // registerItemPage.mutiStepper(1).should('have.text', 'Add Item');
  // registerItemPage.mutiStepper(2).should('have.text', 'Review Quotes');
  // registerItemPage.mutiStepper(3).should('have.text', 'Cross Sale');
  // registerItemPage.mutiStepper(4).should('have.text', 'Final Quotes');
  // registerItemPage.mutiStepper(5).should('have.text', 'Offer Breakdown');
  // registerItemPage.mutiStepper(6).should('have.text', 'Select Billing Account');
  // registerItemPage.mutiStepper(7).should('have.text', 'Payment Details');
  // registerItemPage.mutiStepper(8).should('have.text', 'Confirmation & Thank you');

  registerItemPage.mutiStepperStageCheck(0).should('be.visible');
  registerItemPage.nextButton().should('be.visible').should('be.enabled').click();
  registerItemPage.registrationCard().should('be.visible');
  registerItemPage.mutiStepperStageCheck(1).should('be.visible');

    registerItemPage.noRegistrationCardButton().should('be.visible').click();
    // cy.wait(10000);

    const brand = 'Whirlpool';
    const model_number = 'WRS325SDHZ';
    const item_type = 'Refrigerator';
    const date_received = '325';
    const purchase_price = '1000';
    const serial_number = '123456789';
    const extended_plan = 'Yes';
    const working_order = 'Yes';
    const damage_from_incident = 'No';
    const item_address_same = 'Yes';
    const saved_address = 'Yes';

  const Itempurchase_date = getPreviosDateFromCurrentDate(date_received);

    selectBrand(brand);
    enterModelNumber(model_number);
    if (!model_number.toLocaleLowerCase().includes('lookup')) {
      itemType(item_type);
    }
    enterItemPurchaseDate(Itempurchase_date);
    enterPurchasePrice(purchase_price);
    enterSerialNumber(serial_number);
    selectExtendedPlan(extended_plan);
    selectWorkingOrder(working_order, damage_from_incident);

    selectAddress(item_address_same, saved_address); 
    
    registerItemPage.registerItemButton().scrollIntoView().should('be.visible').click();
    cy.document().its('readyState').should('eq', 'complete');
      registerItemPage.nextButtonInItemPage().should('be.visible').should('be.enabled').click();
  cy.document().its('readyState').should('eq', 'complete');
    registerItemPage.mutiStepperStageCheck(2).should('be.visible');

  cy.document().its('readyState').should('eq', 'complete');

  })

})
