/// <reference types="cypress" />

describe('Aprendendo o comando check', () => {
    it.only('Interagindo com checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        // cy.get('input[type=checkbox]').check()
        cy.get(':nth-child(5) > input').should('be.checked')
        // cy.get('input[type=checkbox]').check('option-3')
        // cy.get('input[type=checkbox]').check('option-2')
        cy.get('input[type=checkbox]').check(['option-2', 'option-4'])
        cy.get('input[type=checkbox]').uncheck('option-3')
    });
    it('Interagindo com checkbox default checked', () => {
        cy.visit('https://www.netflix.com/br-en/login');
        cy.get('input[type="checkbox"]').should('be.checked')
        // cy.get('form').find('input[name="rememberMe"]').should('be.checked')
        //  cy.get('form').find('input[name="rememberMe"]').should('not.be.checked')

    });
    it('Interagindo com radio button', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        // cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check()
        cy.get('input[type="radio').check('yellow')
    });
    it.only('Validando o estado de um  radio button específico', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[name="vegetable"]').first().check().should('have.value', 'lettuce')
        // cy.get('#radio-buttons').find('[type="radio"]').eq(2).check()
        cy.get('[value="cabbage"]').should('be.disabled').and('have.value', 'cabbage')
    });

});