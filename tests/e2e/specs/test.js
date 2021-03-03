// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update the display with running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '4')
  })
  it('should display correct calculation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '36')
  })
  it('can chain multiple operators', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '36')
  })
  it('can output decimals', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.1')
  })
  it('can output negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-90')
  })
  it('can divide by 0 and shows error message', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click(); 
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Cannot divide by zero')
  })



  
})
