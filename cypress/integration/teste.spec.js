/// <reference types="cypress" />

describe('Interagindo com os comandos visit e click', () => {
    it('Comando Visit', () => {
     cy.visit('http://www.webdriveruniversity.com/')
     cy.get('#contact-us > .thumbnail').click()
    })
  })
 
  

  



