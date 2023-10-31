/// <reference types="cypress" />

import { beVisible } from '../support/Basics/constants';
import { simpleHtmlAutomationPage } from '../support/basics/htmlPage';
import { getSalaryAmount } from '../support/getElementId';

describe('Cypress interview', () => {
  const { htmlTableUniqueIdTitle, htmlTableUniqueId } =
    simpleHtmlAutomationPage;

  it('TC01_Locate the salary table', () => {
    cy.visit('/');
    cy.contains('h2', htmlTableUniqueIdTitle).should(beVisible);
    cy.get('[id="htmlTableId"]').as('table1').contains(htmlTableUniqueId[0]);
    cy.get('@table1').contains(htmlTableUniqueId[1]);
    cy.get('@table1').contains(htmlTableUniqueId[2]);
  });

  it('TC02_Locate the salary table, with Custom Commands', () => {
    cy.visit('/');
    getSalaryAmount(htmlTableUniqueId);
  });
});
