import ServiceRequestPage from '@/support/pageObjects/sr-po';
const serviceRequestPage = new ServiceRequestPage();
const srContactFN = 'input_customerDetails.firstName';
const srContactLN = 'input_customerDetails.surname';
const srContactPH = 'customerDetails.phone.0.value';
const srContactPHType = 'input_customerDetails.phone.0.type';
const srContactPHUsage = 'input_customerDetails.phone.0.usage';
const srAppAllDay = 'All Day';

export const checkSrPlanStages = () => {
  serviceRequestPage.mutiStepper(0).should('have.text', 'Verify Customer');
  serviceRequestPage.mutiStepper(1).should('have.text', 'Verify Item');
  serviceRequestPage.mutiStepper(2).should('have.text', 'Select Coverage & Fault');
  serviceRequestPage.mutiStepper(3).should('have.text', 'Choose Repair');
  serviceRequestPage.mutiStepper(4).should('have.text', 'Set Contact');
  serviceRequestPage.mutiStepper(5).should('have.text', 'Booking Confirmation');

  serviceRequestPage.mutiStepperStageCheck(0).should('be.visible');
};

export const checkPlanTable = () => {
  serviceRequestPage.selectPlanTable().should('be.visible').should('have.length.at.least', 1);
};

export const selectAddressForItem = (saved_address: string, address: string) => {
  serviceRequestPage.selectAddressDropdown().should('be.visible').click();
  // cancelPlanPage.selectAddressDropdown().should('be.visible').click();
  // registerItemPage
  //   .selectAddressDropdown()
  //   .should('be.visible')
  //   .click({ force: true }); // - For offers this is not required. Check if any other test fail
  if (saved_address === 'Yes') {
    if (address.length >= 4) {
      serviceRequestPage.selectItemAddress().click({ force: true });
      let found = false;
      serviceRequestPage
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
      serviceRequestPage.selectItemAddress().click({ force: true });
      let found = false;
      serviceRequestPage
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
    serviceRequestPage.getItemAddress().should('be.visible');
    if (address.length >= 1) {
      serviceRequestPage.getItemAddress().click();
      serviceRequestPage.getItemAddress().clear().type(address).wait(5000);
    }

    itemMailingAddress('Yes', address);
  }
};

export const itemMailingAddress = (lookup: string, address: string) => {
  if (lookup === 'Yes') {
    if (address.length >= 1) {
      serviceRequestPage.selectItemAddress().click({ force: true });
      let found = false;
      serviceRequestPage
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

export const selectFaultReason = (reason: string) => {
  if (reason.length >= 1) {
    serviceRequestPage.selectFaultCodeDropdown().should('be.visible').click().wait(5000);
    serviceRequestPage.faultCodeList().should('be.visible');
    // cancelPlanPage.selectItemBrand().click({ force: true });
    serviceRequestPage
      .faultCodeList()
      .children('li')
      .each(($el) => {
        if ($el.text() === reason) {
          cy.wrap($el).click();
        }
      });
  }
};

export const inputFaultDesc = (reason: string) => {
  if (reason.length >= 1) {
    serviceRequestPage.faultCodeDesc().should('be.visible');
    serviceRequestPage.faultCodeDesc().type(reason);
  }
};

export const selectFaultCodeFromList = (coverType: string) => {
  serviceRequestPage.selectSlotTable().within(() => {
    let found = false;

    cy.get('div[data-id]')
      .each(($el) => {
        const rowData = $el.text();
        cy.log('complete row data: ' + rowData);
        if (rowData.toLowerCase().includes(coverType.toLowerCase())) {
          found = true;
          cy.wrap($el).find('[type=checkbox]').click();
          return false;
        }
      })
      .then(() => {
        if (found) {
          cy.log('FaultCode available & match');
        } else {
          assert(false, 'Assert FaultCode Not available & Not match');
        }
      });
  });
};

export const enterFaultDate = (date_received: string) => {
  serviceRequestPage.inputFaultDate().should('be.visible');
  if (date_received.length >= 1) {
    serviceRequestPage.inputFaultDate().clear().type(date_received);
  }
};

export const enterAvailableDate = (date_received: string) => {
  serviceRequestPage.inputAvailableDate().should('be.visible');
  if (date_received.length >= 1) {
    serviceRequestPage.inputAvailableDate().clear().type(date_received);
    serviceRequestPage.btnUserInput(srAppAllDay).should('be.visible').click().wait(5000);
  }
};

export const inputFirstName = (name: string) => {
  if (name.length >= 1) {
    serviceRequestPage.data_testid_UserInput(srContactFN).type(name);
  }
};

export const inputLastName = (name: string) => {
  if (name.length >= 1) {
    serviceRequestPage.data_testid_UserInput(srContactLN).type(name);
  }
};

export const inputPhoneNo = (name: string) => {
  if (name.length >= 1) {
    serviceRequestPage.name_UserInput(srContactPH).type(name);
  }
};

export const clickType = () => {
  serviceRequestPage.data_testid_UserInput(srContactPHType).should('exist').click({ force: true });
};

export const clickUsage = () => {
  serviceRequestPage.data_testid_UserInput(srContactPHUsage).should('exist').click({ force: true });
};

export const getElementValue = (id: string) => {
  return serviceRequestPage.data_testid_UserInput(id).invoke('text');
};

export const getidElementValue = (id: string) => {
  return serviceRequestPage.id_UserInput(id).invoke('text');
};

export const getElementAttrValue = (id: string) => {
  return serviceRequestPage.data_testid_UserInput(id).invoke('attr', 'value');
};

export const getModelValue = () => {
  return serviceRequestPage.inputModelNumberSr().invoke('attr', 'value');
};

export const getSerialValue = () => {
  return serviceRequestPage.inputModelNumberSr().invoke('attr', 'value');
};
