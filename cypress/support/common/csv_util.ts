export const writeDataInCsv = (filePath: string, planData: string) => {
  cy.writeFile(filePath, planData, { flag: 'a' });
};

export const getCompleteDataCVS = () => {
  return cy.fixture('plan.csv').then((csvData) => {
    const csv = csvData.split('\n');
    const headers = csv
      .shift()
      ?.split(',')
      .map((header: string) => header.trim());
    const result = csv.map((row: string) => {
      const PlanData = row.split(',').map((value: string) => value.trim());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return headers?.reduce((acc: any, header: string, index: number) => {
        acc[header] = PlanData[index];
        return acc;
      }, {});
    });
    return result;
  });
};

export const getMatchingDataCVS = (
  columnName: string,
  dataToMap: string,
  columnName1: string,
  dataToMap1: string,
  filePath: string,
) => {
  return cy.readFile(filePath).then((csvData) => {
    const rows = csvData.split('\n');
    const headers = rows[0].split('|');
    const columnNo = headers.indexOf(columnName);
    const columnNo1 = headers.indexOf(columnName1);
    const filteredRow = rows.slice(1).find((row: string) => {
      const columns = row.split('|');
      const matchRow = columns[columnNo] === dataToMap && columns[columnNo1] === dataToMap1;
      return matchRow;
      // switch(columnName){
      //   case "WARRANTY":
      //     return columns[columnNo] === dataToMap && columns[10] === "NEW";
      //   case "BRAND":
      //     return columns[columnNo] === dataToMap  && columns[10] === "NEW";
      //   default:
      //     return columns[columnNo] === dataToMap && columns[10] === "NEW";
      // }
    });
    if (filteredRow) {
      const rowData = filteredRow.split('|');
      const result = {} as any;
      headers.forEach((header: string, index: number) => {
        result[header] = rowData[index];
      });
      return {
        // headers,
        result,
      };
    }
  });
};

export const writMatchingDataCVS = (
  columnName0: string,
  dataToMap0: string,
  columnName1: string,
  dataToUpdate1: string,
  columnName2: string,
  dataToUpdate2: string,
) => {
  cy.readFile('cypress/fixtures/plan.csv').then((csvData) => {
    const csvRows = csvData.split('\n');
    const headers = csvRows[0].split('|');
    const data = csvRows.slice(1).map((row: string) => {
      const values = row.split('|');
      return headers.reduce((obj: { [x: string]: string }, header: string, index: number) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });

    // Find the matched row
    const matchedRowIndex = data.findIndex((row: { [x: string]: string }) => {
      return row[columnName0] === dataToMap0;
    });

    if (matchedRowIndex !== -1) {
      cy.log(`Matched row found at row number: ${matchedRowIndex + 1}`);

      // Update the value in the matched row
      data[matchedRowIndex][columnName1] = dataToUpdate1;
      data[matchedRowIndex][columnName2] = dataToUpdate2;

      // Convert the data back to CSV format
      const modifiedCsvData = [headers.join('|')]
        .concat(
          data.map((row: { [x: string]: any }) => {
            return headers.map((header: string) => row[header]).join('|');
          }),
        )
        .join('\n');

      // Write the modified CSV data back to the file
      cy.writeFile('cypress/fixtures/plan.csv', modifiedCsvData);
    } else {
      cy.log('No matched row found');
    }
  });
};

export const writeDataInJson = (filePath: string, key: string, value: string) => {
  // Read the existing JSON file, update it with the new key-value pair, and write it back
  cy.readFile(filePath).then((data: any) => {
    data[key] = value;
    cy.writeFile(filePath, data);
  });
};

export const getMatchingDataJson = (filePath: string, key: string): Cypress.Chainable<any> => {
  // Read the JSON file and return the value for the specified key
    return cy.readFile(filePath).then((data) => {
    return data[key];
  });
};
