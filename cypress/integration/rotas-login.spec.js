/// <reference types="cypress" />

describe('Validando o status das rotas ', () => {
    it('Validando rotas no fluxo de login', () => {
        cy.server()
        cy.route('POST', '**/users/send_user_data/').as('postUsers')
        // cy.intercept('POST', '**/users/send_user_data/').as('postUsers')
        
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        cy.get('#loginFrm_loginname').type('amandav')
        cy.get('#loginFrm_password').type('ene123')
        cy.get('button[title="Login"]').click(); 
        cy.wait('@postUsers').then((resUsers) => {
            expect(resUsers.status).to.eq(200)

        });
        // cy.wait('@postUsers').its('response.statusCode').should('eq', 200)
        cy.url().should('include', '/account')
        cy.get('.subtext').contains('Amanda')
       
        
    });
});