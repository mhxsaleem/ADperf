import RegisterItemPage from '../pageObjects/register-item-po';
const registerItemPage = new RegisterItemPage();

export const enterModelNumber = (model_number: string) => {
  registerItemPage.inputModelNumber().should('be.visible');
  if (model_number.length >= 1) {
    if (model_number.toLocaleLowerCase().includes('lookup')) {
      // registerItemPage.inputModelNumber().clear().type(model_number);
      const modellist = model_number.split(':');
      registerItemPage.inputModelNumber().type(modellist[1]).wait(8000).type('{downarrow}').wait(2000).type('{enter}');
    } else {
      registerItemPage.inputModelNumber().type(model_number);
    }
  }
};

export const enterModelNumberInSr = (model_number: string) => {
  registerItemPage.inputModelNumberSr().should('be.visible');
  if (model_number.length >= 1) {
    if (model_number.toLocaleLowerCase().includes('lookup')) {
      // registerItemPage.inputModelNumberSr().clear().type(model_number);
      const modellist = model_number.split(':');
      registerItemPage
        .inputModelNumberSr()
        .clear()
        .type(modellist[1])
        .wait(5000)
        .type('{downarrow}')
        .wait(2000)
        .type('{enter}');
    } else {
      registerItemPage.inputModelNumberSr().clear().type(model_number);
    }
  }
};

export const regCodeLookup = (
  regcode: string,
  brand: string,
  item_type: string,
  model_number: string,
  serial_number: string,
) => {
  registerItemPage.txtRegCode().should('be.visible');

  // registerItemPage.inputModelNumber().clear().type(model_number);
  registerItemPage.txtRegCode().type(regcode);
  registerItemPage.btnRegCodeLookup().click().wait(5000);

  //TODO: Below check for case sensitive compare
  if (brand.length >= 1) {
    registerItemPage.selectItemBrandDropdown().should('have.attr', 'value', brand);
  }
  if (item_type.length >= 1) {
    registerItemPage.selectItemTypeDropdown().should('have.attr', 'value', item_type);
  }
  if (model_number.length >= 1) {
    registerItemPage.inputModelNumber().should('have.attr', 'value', model_number);
  }
  if (serial_number.length >= 1) {
    registerItemPage.inputSerialNumber().should('have.attr', 'value', serial_number);
  }
};

export const enterFilterDetails = (filter: string) => {
  registerItemPage.inputFilterData().should('be.visible');
  if (filter.length >= 1) {
    // registerItemPage.inputFilterData().clear().type(filter);
    registerItemPage.inputFilterData().type(filter).wait(1000);
  }
};

export const clearFilterDetails = (filter: string) => {
  registerItemPage.inputFilterData().should('be.visible');
  if (filter.length >= 1) {
    registerItemPage.inputFilterData().clear();
    // registerItemPage.inputFilterData().type(filter);
  }
};

export const enterFilterDetailsInOfferItemTable = (filter: string) => {
  registerItemPage.inputFilterDataInOfferItemTable().should('be.visible');
  if (filter.length >= 1) {
    registerItemPage.inputFilterDataInOfferItemTable().clear();
    registerItemPage.inputFilterDataInOfferItemTable().type(filter).wait(2500);
  }
};

export const clearFilterDetailsInOfferItemTable = (filter: string) => {
  registerItemPage.inputFilterData().should('be.visible');
  if (filter.length >= 1) {
    registerItemPage.inputFilterDataInOfferItemTable().clear();
  }
};

export const editModelNumber = (model_number: string) => {
  registerItemPage.editModelNumber().should('be.visible');
  if (model_number.length >= 1) {
    // registerItemPage.editModelNumber().clear().type(model_number);

    if (model_number.toLocaleLowerCase().includes('lookup')) {
      // registerItemPage.inputModelNumber().clear().type(model_number);
      const modellist = model_number.split(':');
      registerItemPage
        .editModelNumber()
        .clear()
        .type(modellist[1])
        .wait(8000)
        .type('{downarrow}')
        .wait(2000)
        .type('{enter}');
    } else {
      registerItemPage.editModelNumber().clear().type(model_number);
    }
  }
};

export const validateModelNumber = (model_number: string) => {
  registerItemPage.editModelNumber().should('be.visible');
  if (model_number.length >= 1) {
    // registerItemPage.editModelNumber().should('have.value', model_number);
    // registerItemPage.editModelNumber().should('have.value', 'ABCD');
    if (model_number.toLocaleLowerCase().includes('lookup')) {
      // registerItemPage.inputModelNumber().clear().type(model_number);
      const modellist = model_number.split(':');
      registerItemPage.editModelNumber().should('have.value', modellist[1]);
    } else {
      registerItemPage.editModelNumber().should('have.value', model_number);
    }
  }
};

export const enterFilterPlan = (filter: string) => {
  registerItemPage.inputFilterData().should('be.visible');
  if (filter.length >= 1) {
    // registerItemPage.inputFilterData().clear().type(filter);
    registerItemPage.inputFilterData().type(filter);
  }
};

export const clearFilterPlan = (filter: string) => {
  registerItemPage.inputFilterData().should('be.visible');
  if (filter.length >= 1) {
    registerItemPage.inputFilterData().clear();
    // registerItemPage.inputFilterData().type(filter);
  }
};

export const mbaenterFilterDetails = (filter: string) => {
  registerItemPage.mbainputFilterData().should('be.visible');
  if (filter.length >= 1) {
    // registerItemPage.mbainputFilterData().clear().type(filter);
    registerItemPage.mbainputFilterData().type(filter);
  }
};

export const mbaclearFilterDetails = (filter: string) => {
  registerItemPage.mbainputFilterData().should('be.visible');
  if (filter.length >= 1) {
    registerItemPage.mbainputFilterData().clear();
    // registerItemPage.mbainputFilterData().type(filter);
  }
};
