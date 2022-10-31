import { fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });


  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });


  // 1.
  it('should be able to display a running total of numbers', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '342')
  });

  // 2.
  it('should update the display with arithmetical operations', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  });

  // 3.
  it('should be able to handle multiple operations chained together', () => {
    cy.get('#number9').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '47.5')
  });

  // 4.
  it('should be able to handle positive number outputs', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '48')
  });

  it('should be able to handle negitive number outputs', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-68')
  });

  it('should be able to handle decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9.6')
  });

  it('should be able to handle large sets of numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '196728')
  });


  // 5.
  it('should be able to return a value when divided by 0', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Can not divide by 0')
  });
  
});