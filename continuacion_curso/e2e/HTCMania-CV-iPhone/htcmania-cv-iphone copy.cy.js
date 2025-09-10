const homeHTCmaniaPage = require("../../pages/htcmania/homeHTCmaniaPage");

describe('HTCMania', function(){

    before(function(){
        cy.visit('https://www.htcmania.com/');
        cy.get('.sd-cmp-2yAVI> .sd-cmp-1bquj>.sd-cmp-1jLDJ.sd-cmp-fuQAp.sd-cmp-3_LLS').click();
        homeHTCmaniaPage.typeUsername('polpitas');
        homeHTCmaniaPage.typePassword('polpitashtcmania.');
        homeHTCmaniaPage.clickLogin();
        // Espera 5 segundos después de hacer click
       // cy.wait(5000);
        
    });
    
    it('Debe tener el logo de HTCmania', function(){
        cy.get('img.logo')
        .should('be.visible') // que sea visible
        .and('have.attr', 'src', 'https://static.htcmania.com/images/cb/cb/logo.png') // validar la URL de la imagen
        
    });
/*
    it('Debería hacer log in con el usuario polpitas', function(){
        homeHTCmaniaPage.typeUsername('polpitas');
        homeHTCmaniaPage.typePassword('polpitashtcmania.');
        homeHTCmaniaPage.clickLogin();
        // Espera 5 segundos después de hacer click
        cy.wait(5000);
                
    });
*/
    it('Nos debe redireccionar al foro', function(){
        cy.get('a[href="foro.php"]').should('be.visible');

       // cy.url().should('eq', 'https://www.htcmania.com/foro.php'); 
        
    });

})


