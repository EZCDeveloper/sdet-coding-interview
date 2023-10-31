/// <reference types="cypress" />

import 'cypress-plugin-steps';
import { beVisible } from '../support/Basics/constants';
import { simpleHtmlAutomationPage } from '../support/basics/htmlPage';
import { getSalaryAmount } from '../support/getElementId';

describe('Cypress interview', () => {
  const { htmlTableUniqueIdTitle, htmlTableUniqueId } =
    simpleHtmlAutomationPage;

  it('TC01_Locate the salary table with Custom Commands', () => {
    cy.step('STEP 1: Navigate to simple html automation page');
    cy.visit('/');

    cy.step('STEP 2: Verify Html table unique id title is visible');
    cy.contains('h2', htmlTableUniqueIdTitle).should(beVisible);

    cy.step('STEP 3: Verify all salary amounts within html table are visible');
    getSalaryAmount(htmlTableUniqueId);
  });
});
