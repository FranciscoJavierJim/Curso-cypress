describe('Location Demo', function(){

        beforeEach(function(){
            cy.visit('https://www.saucedemo.com/');
        });

        it('Debería tener de título Swag Labs', function(){  //Descripcion en texto de lo que la prueba debe verificar, en este caso, que el titulo de la pagina sea swag labs
            cy.title().should('eq', 'Swag Labs');   //Cypress obtiene el titulo actual del documento html y verifica que el valor sea exactamente igual a 'swag labs'
        });

        it('La URL debería ser https://www.saucedemo.com/', function(){
            cy.url().should('eq', 'https://www.saucedemo.com/');
        });

        it('Debería usar https', function(){
            cy.location('protocol').should('contains','https') //cy.location('protocol') → Obtiene la parte del protocolo de la URL actual en el navegado.      .should('contains','https') → Hace una aserción para verificar que el protocolo contiene la palabra "https"
        });

        it('Debería tener el hostname www.saucedemo.com', function(){
            cy.location('hostname').should('eq', 'www.saucedemo.com');
        });

        it('Debería redireccionar a /inventory', function(){
            cy.get('[data-test="username"]').type('standard_user');  //busca en el DOM mediante data test el username y escribe 'standard_user'
            cy.get('[data-test="password"]').type('secret_sauce');   //busca en el DOM mediante data test password y escribe 'secret_sauce'
            cy.get('[data-test="login-button"]').click();            //busca el boton de 'login' y hace click

            cy.location('pathname').should('eq', '/inventory.html'); //por ultimo, busca y confirma que el pathname es igual a '/inventory.html'
        })
        
});