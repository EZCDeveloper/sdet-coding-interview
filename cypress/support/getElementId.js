/**
 * Get all the string element from a table, iterating over them.
 * Then, make assertions.
 * @param item: selector element
 * @param index: element's position caught
 */
export const getSalaryAmount = tableData => {
  cy.get('[id="htmlTableId"]')
    .find('td:nth-child(3)')
    .each((item, index) => {
      cy.wrap(item).should('include.text', tableData[index]);
    });
};
