/// <reference types="cypress" />

describe('Formulário de Login', () => {
    it('Interagindo com form de Login - caso de sucesso', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top > li > a')
          .contains('Login or register')
          .click()
        cy.get('#loginFrm_loginname').type('amandav')
        cy.get('#loginFrm_password').type('ene123')
        cy.get('button[title="Login"]').click();        
    });
    it.only('Interagindo com form de Login - caso de erro', () => {
      cy.visit('https://automationteststore.com/');
      cy.get('#customer_menu_top > li > a')
        .contains('Login or register')
        .click()
      cy.get('#loginFrm_loginname').type('amanda')
      cy.get('#loginFrm_password').type('ene123')
      cy.get('button[title="Login"]').click();
      cy.get('.alert').contains('Error: Incorrect login or password provided.')       
  });
});


