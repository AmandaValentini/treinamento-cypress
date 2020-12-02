describe(('My First Test suite'),
    function() {
        it('My First testcase',
            function() {
                cy.visit("https://example.com/");
            })
        it('should check correct url', () => {
            cy.url().should('include', 'example.com')
            //cy.url() gets the correct url
        })
    })
