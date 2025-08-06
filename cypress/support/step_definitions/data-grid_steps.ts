//Luke to fix
// import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
// import { createDataGridPageObject as dataGridPO } from '../../../components/data-grid/v2/data-grid.po';
// //import { createDataGridPageObject as dataGridPO } from '../components/data-grid/v2/data-grid.po';

// Given('I am on the data grid page', () => {
//   cy.visit('/iframe.html?id=components-datagrid--client-side&viewMode=story');
// });

// Given('I interact with the data grid', () => {
//   cy.get('[data-testid=data-grid]').should('be.visible').as('dataGrid');
// });

// When('I type {string} in the filter input', (searchText: string) => {
//   cy.get('input[placeholder=Filter]').type(searchText);
// });

// When('I click on the first row in the data grid', () => {
//   // Add code to locate and click the first row in the data grid
// });

// Then('the row should be selected', () => {
//   // Add code to verify that the first row in the data grid is selected
// });

// Then('the first row should contain {string}', (expectedText: string) => {
//   cy.get('@dataGrid').should('be.visible');

//   // dataGridPO(cy.get('@dataGrid'))
//   //   .getRows()
//   //   .closest('[data-rowindex=0]')
//   //   .first()
//   //   .should('contain', expectedText);

//   dataGridPO(cy.get('@dataGrid')).getCell(0, 0).should('contain', expectedText);
//   // Add code to verify that the first row in the data grid contains the expected text
// });
