describe('Assertions demo', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button')
});

    it('TDD Assertions', () => {
        cy.log('Check del tamaño')
        cy.get('input[type="radio"]').should('have.length', 3)

        cy.log('Check de clase')
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled')

        cy.log('NO existe check')
        cy.get('.mt-3').should('not.exist')

        cy.log('Check de texto')
        cy.get('input[type="radio"]').eq(0).click({ force: true });
        cy.get('.mt-3')
        .should('have.text', 'You have selected Yes')    
        .and('include.text', 'Yes')
        .and('not.contain', 'NO')

        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
        });

    it('BDD Assertions', () => {

        cy.log('Clase y tamaño')
        cy.get('input[type="radio"]').should($inputs => {

            expect($inputs).to.have.lengthOf(3)
            expect($inputs[2]).to.have.class('disabled')
    })

        cy.log('Check de texto')
        cy.get('input[type="radio"]').eq(1).click({ force: true });

        cy.get('.mt-3').should($element => {
            expect($element).to.have.text('You have selected Impressive')
            expect($element).to.include.text('Impressive')
            expect($element).to.not.contain('NO')
        })

 })

})

