/// <reference types="cypress" />

const softwareDevSalaray = '$150,000+';

describe('Cypress interview', () => {
  it('Locate the salary table', () => {
    cy.visit('/');
    cy.contains('h2', 'HTML Table with unique id').should('be.visible');
    cy.get('[id="htmlTableId"]').as('table1').contains(softwareDevSalaray);
    cy.get('@table1').contains('$120,000+');
    cy.get('@table1').contains('$50,000+');
  });
});
