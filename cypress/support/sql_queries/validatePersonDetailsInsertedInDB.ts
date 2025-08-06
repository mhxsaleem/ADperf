export const validatePersonDetailsInsertedInDB = (forename: string, surname: string) => {
  cy.task(
    'queryOGCDb',
    `SELECT *  from opgc.person_opgc p  inner join opgc.person_opgc_address_link l on p.per_gid =l.per_gid inner join opgc.address a on a.address_gid= l.address_gid inner join opgc.person_contact_point_opgc pcpo on p.per_gid =pcpo.per_gid where p.per_forename in('${forename}') and p.per_surname in ('${surname}');`,
    // `SELECT * from opgc.person_opgc p inner join opgc.person_opgc_address_link l on p.per_gid =l.per_gid inner join opgc.address a on a.address_gid= l.address_gid inner join opgc.person_contact_point_opgc pcpo on p.per_gid =pcpo.per_gid where p.per_forename in('FNAutoYodOXRGinI') and p.per_surname in ('LNAutojQuvtnqAAY');`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ).then((result: any) => {
    expect(result).to.have.length.greaterThan(0);
    cy.wrap(result).as('validatePersonDetailsInsertedInDB');
  });
};
