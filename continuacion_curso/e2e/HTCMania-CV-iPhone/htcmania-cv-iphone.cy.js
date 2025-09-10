describe('HTCMania', function(){

    beforeEach(function(){
        cy.visit('https://www.htcmania.com/');
        cy.get('.sd-cmp-2yAVI> .sd-cmp-1bquj>.sd-cmp-1jLDJ.sd-cmp-fuQAp.sd-cmp-3_LLS').click();
    });
    
    it('Debe tener el logo de HTCmania', function(){
        cy.get('img.logo')
        .should('be.visible') // que sea visible
        .and('have.attr', 'src', 'https://static.htcmania.com/images/cb/cb/logo.png') // validar la URL de la imagen
        
    });

    it('La URL debe ser https://www.htcmania.com/', function(){
        cy.url().should('eq', 'https://www.htcmania.com/');
    });

    it('Nos debe redireccionar a https://www.htcmania.com/ con nuestro usuario y posteriormente al foro de la web', function(){
        cy.get('.alt1>.smallfont>[name="vb_login_username"]').type('polpitas');
        cy.get('.alt1>.smallfont>[name="vb_login_password"]').type('polpitashtcmania.');
        cy.get('div[style*="padding-top:6px"] input.button').click();

        // Espera 5 segundos después de hacer click
        cy.wait(5000);

        cy.get('a[href="foro.php"]').click();
        cy.url().should('eq', 'https://www.htcmania.com/foro.php');
        
    });


})


