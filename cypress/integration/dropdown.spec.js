/// <reference types="cypress" />

describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
      })
    it('Aprendendo o comonado select', () => {
        cy.get('#dropdowm-menu-1').select('SQL')
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')
        
    });
});