// load a fixed set data located in a file (cargar un conjunto fijo de datos ubicados en un archivo)

describe('Fixtures Demo', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('Fictures-demo/sauceCredentials') //lee el archivo sauceCredentials dentro de la carpeta Ficture-demo
        .then(credentials =>{ //espera a que el fixture se cargue y recibe su contenido como parametro credentials (normalmente un .json)
            this.credentials = credentials; //guarda ese objeto en this.credentials para reutilizarlo despues en el test

        })

    });

    it('Standard Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUser);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text', 'Products');
    })

    it('Incorrect Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('Incorrect Password', function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUser);
        cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('Locked out User', function(){
        cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    })
});