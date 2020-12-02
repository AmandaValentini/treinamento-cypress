/// <reference types="cypress" />

describe('Teste File upload via webdriveruniversity', () => {
    it('Upload file - simples', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        // cy.get('#file-upload').click()
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myFile').attachFile('artigo_99042.jpg')
        cy.get('#submit-button').click()
    });
    it("Upload a file", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("fundo.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "fundo.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    });
    it.only("Upload file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        const yourFixturePath = 'example.json';
        cy.get('#myFile').attachFile(yourFixturePath);
        cy.get("#submit-button").click();
    });

    it("Upload no file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get("#submit-button").click();
    });
    
});