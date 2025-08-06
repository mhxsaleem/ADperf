export const searchCustomerBySurname = (surname: string) => {
  cy.task(
    'queryOGCDb',
    `Select p.*,a.* from opgc.person_opgc p inner join opgc.person_opgc_address_link l on l.per_gid=p.per_gid inner join opgc.address a on l.address_gid=a.address_gid where p.per_surname='${surname}' and per_address_cat_code = 'COR';`,
  )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((result: any) => {
      cy.log('result: ' + result);
      expect(result).to.have.length.greaterThan(0);
      cy.wrap(result).as('searchCustomerBySurnameResults');
    });
};
