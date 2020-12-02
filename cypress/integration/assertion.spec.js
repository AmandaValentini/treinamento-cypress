/// <reference types="cypress" />

describe('Conhecendo asserção no Cypress', () => {
    it('Interagindo com should', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(7) > a')
            .should('contain', 'Login')
          .click()
        cy.url().should('include', '/index.php?rt=account/login')
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]')
          .contains('Forgot your login')
          .click()
        cy.go('back')
        cy.reload()
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click()
        cy.get('#forgottenFrm_loginname').type('amandav')
        cy.get('#forgottenFrm_email').type('teste')
        // cy.reload()
        cy.get('button[title="Continue"]').click()
        cy.get('.alert').should('be.visible').and('contain','Error: No records found matching information your provided, please check your information and try again!')
        
    });
});