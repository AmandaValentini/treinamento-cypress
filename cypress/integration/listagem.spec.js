/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registro', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        } ).as('getNewtable');
        cy.visit('http://demo.automationtesting.in/WebTable.html');
        cy.get('div[role=row]').should('have.length', 1);
    });

    it('Listagem com um registro', () => {
       
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fixture:webtable-unicoregistro'
        } )

        cy.visit('http://demo.automationtesting.in/WebTable.html');
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contains.text', '7073178560');
    });
});