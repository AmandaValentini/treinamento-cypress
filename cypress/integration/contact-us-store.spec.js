/// <reference types="cypress" />



let Chance = require('chance')
let chance = new Chance

describe('Formulário Contact Us - Automation Test Store', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
      })
    it.only('Validação de campos do form Contact', () => {
        // cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(5) > a').should('contain', 'Contact Us').click()
        cy.get('button[title=Submit]').click()
        //validação de regra no input first name
        cy.get('#field_11 label.control-label.col-md-4').should('contain', 'First name:')
        cy.get('#field_11 span.input-group-addon>span').should('have.class', 'required')
        cy.get('#field_11 .element_error')
        .should('have.css', 'color',  'rgb(225, 69, 41)')
        .and('contain', 'First name: is required field! Name must be between 3 and 32 characters!')
        cy.get('#ContactUsFrm_first_name').type('p')
        cy.get('button[title=Submit]').click()
        cy.get('#field_11 .element_error').should('contain', 'Name must be between 3 and 32 characters!')
        //validação de imput E-mail
        cy.get('#field_12 label.control-label.col-md-4').should('contain', 'Email:')
        cy.get('#field_12 span.input-group-addon>span').should('have.class', 'required')
        cy.get('#field_12 .element_error')
        .should('have.css', 'color',  'rgb(225, 69, 41)')
        .and('contain', 'Email: is required field! E-Mail Address does not appear to be valid!')
        cy.get('#ContactUsFrm_email').type('a2@.c')
        cy.get('button[title=Submit]').click()
        cy.get('#field_12 .element_error').should('contain', 'E-Mail Address does not appear to be valid!')
        //validação da descrição
        cy.get('#field_13 label.control-label.col-md-4').should('contain', 'Enquiry:')
        cy.get('#field_13 span.input-group-addon>span').should('have.class', 'required')
        cy.get('#field_13 .element_error')
        .should('have.css', 'color',  'rgb(225, 69, 41)')
        .and('contain', 'Enquiry: is required field! Enquiry must be between 10 and 3000 characters!')
        cy.get('#ContactUsFrm_enquiry').type(chance.character({ alpha: true }))
        cy.get('button[title=Submit]').click()
        cy.get('#field_13 .element_error').should('contain', 'Enquiry must be between 10 and 3000 characters!')

    });
    it('Formulário Contact us com sucesso', () => {
        cy.get('ul.info_links_footer :nth-child(5) > a').should('contain', 'Contact Us').click()
        cy.get('#ContactUsFrm_first_name').type(chance.name())
        cy.get('#ContactUsFrm_email').type(chance.email())
        cy.get('#ContactUsFrm_enquiry').type(chance.sentence())
        cy.get('button[title=Submit]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

        
    });
});



