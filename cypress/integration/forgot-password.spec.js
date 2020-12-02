/// <reference types="cypress" />

describe('Formulário Esqueci minha senha', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
  })
    it('fluxo de sucesso - esqueci a senha', () => {
        // cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(7) > a')
          .contains('Login')
          .click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]')
          .contains('Forgot your login')
          .click()
        cy.go('back')
        cy.reload()
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click()
        cy.get('#forgottenFrm_loginname').type('amandav')
        cy.get('#forgottenFrm_email').type('teste@gmail.com')
        // cy.reload()
        cy.get('button[title="Continue"]').click()
        
    });
    it('fluxo de erro - esqueci a senha', () => {
        // cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(7) > a')
          .contains('Login')
          .click()
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
        cy.get('.alert').contains('Error: No records found matching information your provided, please check your information and try again!')
    });
    it('fluxo de sucesso - esqueci Login', () => {
        // cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(7) > a')
          .contains('Login')
          .click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]')
          .contains('Forgot your login')
          .click()
        cy.get('#forgottenFrm_lastname').type('Valentini')
        cy.get('#forgottenFrm_email').type('teste@gmail.com')
        cy.get('button[title="Continue"]').click()
        cy.get('.alert').contains('Success: Your login name reminder has been sent to your e-mail address.')
    });
    it('fluxo de erro - esqueci Login', () => {
        // cy.visit('https://automationteststore.com/');
        cy.get('ul.info_links_footer :nth-child(7) > a')
          .contains('Login')
          .click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]')
          .contains('Forgot your login')
          .click()
        cy.get('#forgottenFrm_lastname').type('Valentino')
        cy.get('#forgottenFrm_email').type('teste@gmail.com')
        cy.get('button[title="Continue"]').click()
        cy.get('.alert').contains('Error: No records found matching information your provided, please check your information and try again!')
    });
});