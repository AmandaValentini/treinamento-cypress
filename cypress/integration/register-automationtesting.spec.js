/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance

describe('Fluxo de cadastro na plataforma demo.automationtesting', () => {
    context('Cadastro', () => {
        it('Cadastro de usuário no site', () => {
    
           //rotas
           cy.server()
           cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**' )
                .as('postNewtable');
           cy.route('POST','**/api/1/databases/userdetails/collections/usertable?**' )
                .as('postUsertable');
           cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**' )
                .as('getNewtable');
            
            cy.visit('http://demo.automationtesting.in/Register.html');
            //type
            cy.get('input[placeholder="First Name"]').type(chance.first())
            cy.get('input[ng-model="LastName"]').type(chance.last())
            cy.get('input[ng-model="EmailAdress"]').type(chance.email())
            cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false}))
            //check -> radio's e checkboxes
            cy.get('input[value="FeMale"]').check();
            cy.get('input[type=checkbox]').check('Cricket');
            cy.get('input[type=checkbox]').check('Movies');
            //select -> select e select2 (combos)
            cy.get('select#Skills').select('Javascript');
            cy.get('select#countries').select('Australia')
            cy.get('select#country').select('Australia', { force:true });
            cy.get('select#yearbox').select('1990');
            cy.get('select[ng-model="monthbox"]').select('May');
            cy.get('select#daybox').select('24');
            cy.get('input#firstpassword').type('Agilizei@2020');
            cy.get('input#secondpassword').type('Agilizei@2020');
            //attachFile -> input file upload
            cy.get('input#imagesrc').attachFile('fundo.png');

            cy.get('button#submitbtn').click();

            cy.wait('@postNewtable').then((resNewtable) => {
                // console.log(resNewtable.status)
                // cy.log(resNewtable.status)
                expect(resNewtable.status).to.eq(400)
            });
            cy.wait('@postUsertable').then((resUsertable) => {
                // console.log(resNewtable.status)
                // cy.log(resNewtable.status)
                expect(resUsertable.status).to.eq(200)
            });
            cy.wait('@getNewtable').then((resNewtable) => {
                // console.log(resNewtable.status)
                // cy.log(resNewtable.status)
                expect(resNewtable.status).to.eq(200)
            });
            cy.url().should('contain', 'WebTable.html')
        });
    });
});