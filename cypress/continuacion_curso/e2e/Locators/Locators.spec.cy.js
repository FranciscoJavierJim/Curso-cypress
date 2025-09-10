let username = "standard_user";  //creamos variable username para el login
let password = "secret_sauce";  //creamos variable password para el login

describe('Locators (localizadores) en Cypress', function(){

    beforeEach(function(){
        cy.visit("https://www.saucedemo.com/");
    });

    it('Método GET',function(){ //el metodo get utiliza selectores para llegar a un elemento
        cy.get("#user-name").type(username);      //busca mediante el selector de atributo ID (#) el valor user-name
        cy.get("input#password").type(password);  //ahora buscaremos el password de manera mas especifica, usaremos el tag name seguido del atributo ID => imput#password 
        cy.get('[data-test="login-button"]').click(); //para el login, usaremos el atritubo data-test para encontrarlo, usandolo entre [] y escribiendolo exactamente igual a como aparece en el codigo html
    });

    it('Método EQ|FIRST|LAST',function(){       
        cy.get('input').first().type(username); // con estos 3 comandos buscaremos la posicion de un tag name, en nuestro ejemplo tenemos 3 input
        cy.get('input').eq(1).type(password);   // (uno para username, otro para password y el ultimo para login). Con el comando 'first' nos buscara 
        cy.get('input').last().click();         // automaticamente el primero de ellos, con eq(x) nos buscara la posicion 'x', y con last, el ultimo
    });

    it('Método FILTER', function(){
       cy.get('input').filter('[type="text"]').type(username);      //nos ayuda a encontrar un elemento del DOM que hace match a un selector en especifico
       cy.get('input').filter('[type="password"]').type(password);  //en nuestro ejemplo: busca todos los input y filtra primero el que tiene tipo name, 
       cy.get('input').filter('[type="submit"]').click();           //despues filta el tipo password y por ultimo el tipo submit
    });

    it('Método FIND',function(){
       cy.get('form').find('input').eq(0).type(username); //este metodo obtiene los elementos descientes de un selector en especifico
       cy.get('form').find('input').eq(1).type(password); //en nuestro ejemplo: busca los 'input' que son descendientes de un 'form' (aunque no sean 
       cy.get('form').find('input').eq(2).click();        // descendientes directos), a continuaicon con eq(x) indicamos la posicion que buscamos
    });

    it('Método PARENT', function(){
        cy.get('form').parent().should('have.class', 'login-box'); //aqui hemos buscado un form que tiene como padre en elemento class llamado 'login-box'
    });

});