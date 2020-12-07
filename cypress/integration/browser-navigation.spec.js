/// <reference types="cypress" />

describe('Validando links da homepage ', () => {
    it('Confirmando redirect correto dos links', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go(-1)
        cy.reload()
        cy.go('forward')
        cy.url().should('include', 'contactus')
    });
});