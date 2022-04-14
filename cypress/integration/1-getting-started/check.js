/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Check Buttons Names", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000");
  });

 
  it("Button Name Latest", () => {
    // eslint-disable-next-line no-undef
    cy.get('#latest').contains('Newest');
  });
  it("Button Name Bitcoin", () => {
    // eslint-disable-next-line no-undef
    cy.get('#bitcoin').contains('bitcoin');
  });
  it("Button Name Marvel", () => {
    // eslint-disable-next-line no-undef
    cy.get('#marvel').contains('Marvel');
  });
  it("Exists class Pagination", () => {
    // eslint-disable-next-line no-undef
    cy.get('.pagination').should('exist');
  });
});
