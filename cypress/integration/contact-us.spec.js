/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance

describe('Interagindo com o form Contact-us', () => {
    it('Formulário Contact us - caso sucesso', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type(chance.name());
        cy.get('[name="last_name"]').type (chance.last());
        cy.get('[name="email"]').type(chance.email());
        cy.get('textarea.feedback-input').type('Como aprender automação com Cypress.io?');
        cy.get('[type="submit"]').click()
    });
    it('Formulário Contact us - caso de erro', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Ana');
        cy.get('[name="last_name"]').type ('Silveira de Albuquerque');
        cy.get('[name="email"]').type('ana_sa@gmail.com');
        cy.get('[type="submit"]').click()
    });
});
// describe.only('Interagindo com o form Contact-us', () => {
//     it('Formulário Contact us - caso sucesso', () => {
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
//         cy.get('[name="first_name"]').type(chance.name());
//         cy.get('[name="last_name"]').type (chance.last());
//         cy.get('[name="email"]').type(chance.email());
//         cy.get('textarea.feedback-input').type('Como aprender automação com Cypress.io?');
//         cy.get('[type="submit"]').click()
//     });
//     it.only('Formulário Contact us - caso de erro', () => {
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
//         cy.get('[name="first_name"]').type('Ana');
//         cy.get('[name="last_name"]').type ('Silveira de Albuquerque');
//         cy.get('[name="email"]').type('ana_sa@gmail.com');
//         cy.get('[type="submit"]').click()
//     });
// });
