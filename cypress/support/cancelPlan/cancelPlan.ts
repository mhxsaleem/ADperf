import CancelPlanPage from '@/support/pageObjects/cancel-plan-po';
const cancelPlanPage = new CancelPlanPage();

export const selectCancelReason = (reason: string) => {
  if (reason.length >= 1) {
    cancelPlanPage.selectCancelReasonDropdown().prev().should('be.visible').click();
    cancelPlanPage.cancelReasonList().should('be.visible');
    // cancelPlanPage.selectItemBrand().click({ force: true });
    cancelPlanPage
      .cancelReasonList()
      .children('li')
      .each(($el) => {
        if ($el.text().toLocaleLowerCase() === reason.toLocaleLowerCase()) {
          cy.wrap($el).click();
        }
      });
  }
};

export const checkCancelPlanStages = () => {
  cancelPlanPage.mutiStepper(0).should('have.text', 'Select Plan');
  cancelPlanPage.mutiStepper(1).should('have.text', 'Cancel Reason');
  cancelPlanPage.mutiStepper(2).should('have.text', 'Discount Offer');
  cancelPlanPage.mutiStepper(3).should('have.text', 'Manual Date Option');
  cancelPlanPage.mutiStepper(4).should('have.text', 'Review Settlement/Refund');
  cancelPlanPage.mutiStepper(5).should('have.text', 'Payment Details');
  cancelPlanPage.mutiStepper(6).should('have.text', 'Review Retention');
  cancelPlanPage.mutiStepper(7).should('have.text', 'Confirmation');

  cancelPlanPage.mutiStepperStageCheck(0).should('be.visible');
};

export const checkPlanTable = () => {
  cancelPlanPage
    .selectPlanTable()
    .should('be.visible')
    // .wait(5000)
    .should('have.length.at.least', 1);
};

export const selectCancelPlanFromList = (_brand: string, item_type: string, plan: string, selectPlan: string) => {
  cancelPlanPage.selectPlanTable().within(() => {
    let found = false;

    cy.get('div[data-id]')
      .each(($el) => {
        const rowData = $el.text();
        cy.log('complete row data: ' + rowData);
        if (
          rowData.toLowerCase().includes(item_type.toLowerCase()) &&
          rowData.toLowerCase().includes(plan.toLowerCase())
        ) {
          found = true;
          switch (selectPlan) {
            case 'Yes':
              cy.wrap($el).find('[type=checkbox]').click();
              break;
            case 'cancel':
              cy.wrap($el).find('[value=cancel]').click();
              break;
            case 'retain':
              cy.wrap($el).find('[value=retain]').click();
              break;
            default:
              cy.log('Plan Not selected for cancel');
              break;
          }
          return false;
        }
      })
      .then(() => {
        if (found) {
          cy.log('plan available & match');
        } else {
          assert(false, 'Assert plan Not available & Not match');
        }
      });
  });
};

export const reviewCancelPlan = (
  _brand: string,
  item_type: string,
  plan: string,
  effectiveDate: string,
  refund: string,
) => {
  cancelPlanPage
    .selectPlanTable()
    .eq(0)
    .within(() => {
      let found = false;

      cy.get('div[data-id]')
        .each(($el) => {
          const rowData = $el.text();
          cy.log('complete row data: ' + rowData);
          if (
            rowData.toLowerCase().includes(item_type.toLowerCase()) &&
            rowData.toLowerCase().includes(plan.toLowerCase())
          ) {
            found = true;

            cy.wrap($el).find('div[data-field="cancellationDate"]').invoke('text').should('contain', effectiveDate);

            cy.wrap($el).find('div[data-field="amount"]').invoke('text').should('contain', refund);

            return false;
          }
        })
        .then(() => {
          if (found) {
            cy.log('plan available & match');
          } else {
            assert(false, 'Assert plan Not available & Not match');
          }
        });
    });
};

export const selectAddressBillingAddress = (saved_address: string, address: string) => {
  cancelPlanPage.selectAddressDropdown().should('be.visible').click();
  // cancelPlanPage.selectAddressDropdown().should('be.visible').click();
  // registerItemPage
  //   .selectAddressDropdown()
  //   .should('be.visible')
  //   .click({ force: true }); // - For offers this is not required. Check if any other test fail
  if (saved_address === 'Yes') {
    if (address.length >= 4) {
      cancelPlanPage.selectItemAddress().click({ force: true });
      let found = false;
      cancelPlanPage
        .selectItemAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    } else if (address.length < 4) {
      cancelPlanPage.selectItemAddress().click({ force: true });
      let found = false;
      cancelPlanPage
        .selectItemAddress()
        .children('li')
        .each(($el, index, $rows) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === 'Saved Mailing Addresses'.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($rows[index + 1]).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  } else if (saved_address === 'No') {
    cancelPlanPage.getBillingAddress().should('be.visible');
    if (address.length >= 1) {
      cancelPlanPage.getBillingAddress().click();
      cancelPlanPage.getBillingAddress().clear().type(address).wait(5000);
    }

    itemMailingAddress('Yes', address);
  }
};

export const itemMailingAddress = (lookup: string, address: string) => {
  if (lookup === 'Yes') {
    if (address.length >= 1) {
      cancelPlanPage.selectItemAddress().click({ force: true });
      let found = false;
      cancelPlanPage
        .selectItemAddress()
        .children('li')
        .each(($el) => {
          cy.log($el.text());
          const availableAddress = $el.text().trim();
          if (availableAddress.toLowerCase() === address.toLowerCase()) {
            cy.log('If condition match');
            cy.wrap($el).click();
            found = true;
          }
        })
        .then(() => {
          if (!found) {
            assert(false, 'Address not found in the dropdown');
          }
        });
    }
  }
};

export const enterAccountName = (inputValue: string) => {
  cancelPlanPage.inputAccountName().should('be.visible');
  if (inputValue.length >= 1) {
    cancelPlanPage.inputAccountName().clear().type(inputValue);
  }
};

export const selectAccountType = (item_type: string) => {
  if (item_type.length >= 1) {
    cancelPlanPage.selectAccountType().prev().should('be.visible').click();
    cancelPlanPage.selectAccountlistBox().click({ force: true });
    cancelPlanPage
      .selectAccountlistBox()
      .children('li')
      .each(($el) => {
        if ($el.text() === item_type) {
          cy.wrap($el).click();
        }
      });
  }
};

export const enterAccountNumber = (inputValue: string) => {
  cancelPlanPage.inputAccountNumber().should('be.visible');
  if (inputValue.length >= 1) {
    cancelPlanPage.inputAccountNumber().clear().type(inputValue);
  }
};

export const enterRoutingNumber = (inputValue: string) => {
  cancelPlanPage.inputRoutingNumber().should('be.visible');
  if (inputValue.length >= 1) {
    cancelPlanPage.inputRoutingNumber().clear().type(inputValue);
  }
};
