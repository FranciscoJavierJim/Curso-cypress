describe('Cypress Keyboard Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

    })

    it('Slow Speed Typing', {keystrokeDelay: 150} , () => {
        cy.get('#user-name').type('test demo for typing with slow speed')

    })

    it('Standard Speed Typing', () => {
        cy.get('#user-name').type('test demo for typing with standard speed')

    })

    it('Slow Speed Typing', {keystrokeDelay: 0} , () => {
        cy.get('#user-name').type('test demo for typing with fast speed')

    })

})