describe('Cypress Browser Demo', () => {

    it('Browser Properties', () => {

        cy.visit('https://www.whatismybrowser.com/')

        if(Cypress.browser.name === 'chrome'){
            cy.get('.string-major > a').should('have.text', 'Chrome 139 on Windows 10')
        }else if(Cypress.browser.name === 'firefox'){
            cy.get('.string-major > a').should('have.text', 'Firefox 142 on Windows 10')
        }

    });

})