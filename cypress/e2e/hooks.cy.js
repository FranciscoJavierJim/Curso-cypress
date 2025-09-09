/*
1. before()             se ejecuta UNA VEZ, al principio
2. beforeEach()         se ejecuta antes de cada test
3. TEST EXECUTION
4. afterEach()          se ejecuta despues de cada test
5. beforeEach()
6. TEST EXECUTION
7. afterEach()
8. after()              se ejecuta UNA VEZ, al final
*/

/*
skip - only => podemos usar "skip" para saltar un test u "only" despues de un "it" para ejecutar un solo test
*/

describe('Demo de hooks', function(){

    before(function(){
        cy.log('Before');           // Imprime un mensaje en el Log de Cypress (la interfaz gráfica o la consola de ejecución)
    })

    beforeEach(function(){
        cy.log('BeforeEach'); 
    })

    afterEach(function(){
        cy.log('AfterEach'); 
    })

    after(function(){
        cy.log('After'); 
    })

        it('Deberia ser el test #1', function(){
        console.log('Test #1')      // Imprime un mensaje en la consola
    })

        it('Deberia ser el test #2', function(){
        console.log('Test #2')
    })

        it('Deberia ser el test #3', function(){
        console.log('Test #3')
    })
})

