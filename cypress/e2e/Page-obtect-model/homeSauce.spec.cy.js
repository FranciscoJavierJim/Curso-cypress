import homeSaucePage from '../../pages/saucedemo/homeSaucePage';
import inventoryPage from '../../pages/saucedemo/inventoryPage'


describe('Implementacion PageObjectModel', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Deberia logearse y entrar a la pagina de inventario', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        
        inventoryPage.elements.titleSpan().should('have.text', 'test');
    })

     it('Deberia desplegar el mensaje de usuario bloqueado', () => {
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        
        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })

    it('Deberia desplegar el mensaje de usuario o contraseña incorrecto', () => {
        homeSaucePage.typeUsername('usuarioinventado');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();
        
        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('Deberia desplegar el mensaje de usuario o contraseña incorrecto', () => {
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('contraseñainventada');
        homeSaucePage.clickLogin();
        
        homeSaucePage.elements.errorMessage().should('contain.text', 'Username and password do not match any user in this service');
    })
});