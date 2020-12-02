/// <reference types="cypress" />

describe('Separando os testes por resolução', () => {
    context('Resolução 720px', () => {
      beforeEach(() => {
        //executar esses testes como se estivesse em um desktop
        // navegador com monitor 720p
        cy.viewport(1280, 720)
        cy.visit('https://automationteststore.com/');
      });

      it('displays full header', () => {
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
      });
    });
  
    context('Resolução iphone-5', () => {
      beforeEach(() => {
        // executar esses testes como se estivesse em mobile
        // e garantir que nossa UI responsiva esteja correta
        cy.viewport('iphone-5')
        cy.visit('https://automationteststore.com/');
      });
  
      it('displays mobile menu on click', () => {
        cy.get('.navbar-toggle').should('be.visible').click()
      });
    });
  });

  const sizes = [['iphone-6','landscape'], 'ipad-2', [1024, 768]]

describe.only('Múltiplas resoluções', () => {
  sizes.forEach((size) => {
    // realiza asserção no link logo
    // array com  várias resoluções
    it(`exibe a logo na  ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit('https://automationteststore.com/')
      cy.get('.logo > img').should('have.have.attr', 'title').and('contain', 'Automation Test Store')
    });
  });
});

  