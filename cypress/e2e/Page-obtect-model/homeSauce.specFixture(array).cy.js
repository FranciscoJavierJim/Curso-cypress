import homeSaucePage from '../../pages/saucedemo/homeSaucePage'; //representa la página de login (tiene métodos para escribir usuario, contraseña y hacer clic en "Login").
import inventoryPage from '../../pages/saucedemo/inventoryPage'; //representa la página de inventario (después del login exitoso).

const test = require('../../fixtures/data-driven/sauceUsers.json'); //esto lee el JSON que contiene los datos de prueba

describe('Home Sauce Demo', () => {
  
    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  });

  test.forEach(test => {  // itera sobre cada objeto en el array de datos de prueba. 

    it(test.name, () => { // ademas, crea un it para cada objeto en el array de datos de prueba
      homeSaucePage.typeUsername(test.username); // usa los datos del objeto actual para completar el formulario de login
      homeSaucePage.typePassword(test.password); // usa los datos del objeto actual para completar el formulario de login
      homeSaucePage.clickLogin(); // hace clic en el botón de login
      
      if (test.name === 'Deberia logearse y entrar a la pagina de inventario') { // si el test es el del login correcto => revisa que la pagina 
        inventoryPage.elements.titleSpan().should('have.text', test.expected); // de inventario tenga el titulo 'products'
      } else {  // si el test es cualquiera de los de login incorrecto => revisa que aparezca el mensaje de error esperado
        homeSaucePage.elements.errorMessage().should('contain.text', test.expected);
      }
    })

  });
      
});        