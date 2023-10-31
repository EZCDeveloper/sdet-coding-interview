/**
 * Get all the string element from a table, iterating over them.
 * Then, make assertions.
 * @param item: selector element
 * @param index: element's position caught
 */
export const getSalaryAmount = tableData => {
  cy.get('tbody tr td')
    .eq(2)
    .each((item, index) => {
      cy.wrap(item).should('contain.text', tableData[index]);
    });
};
