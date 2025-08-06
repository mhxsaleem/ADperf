export const validateItemDetailsInsertedInDB = () => {
  cy.task(
    'queryOGCDb',
    `select io.item_model_num ,io.item_serial_num  from opgc.item_opgc io inner join opgc.person_item_relationship_opgc piro on io.item_gid = piro.item_gid inner join opgc.person_opgc po on po.per_gid =piro.per_gid where io.item_gid = 'GEN:16441'; `,
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((result: any) => {
      cy.log('result: ' + result[0]);
      expect(result).to.have.length.greaterThan(0);
      cy.wrap(result).as('validateItemDetailsInsertedInDB');
    });
};
