describe('Sesion de Retry-Ability', function(){

    beforeEach(function(){  //con este beforeEach hacemos que cada uno de nuestros test abran una url, para que lo haga antes de que cada it sea ejecutado
       
        cy.visit('http://localhost:8888/#/');   // comando que abre una pagina web dentro del navegador controlado por cypress
        
        cy.get('.new-todo') // este comando se usa para buscar y obtener elementos del DOM (la página web bajo prueba) utilizando un selector de CSS

        .type('Todo-a{enter}')  // sirve para escribir texto en un campo de entrada (simula que un usuario teclea)
                                // ademas, el parametro "enter" hace un enter a continuacion del type
       
        .type('Todo-b{enter}')

    })    

    it('Debe crear dos items', ()=> {

        cy.get('.todo-list li', {timeout:20000})    // es recomendable añadir un timeout para tener un tiempo de espera superior y darle tiempo para poder abrir todo correctamente

        .should('have.length', 2)   // este comando es un assertion (afirmacion), se usa para verificar que algo cumple cierta condicion
                                    // "have.length, 2" ya que deberiamos tener 2 li en el DOM despues de haber metido 2 todo a la lista

    });

    it('Debe contener el texto indicado', ()=>{     //vamos a crear una funcion para chequear que los 'todos' tengan el texto correcto

        cy.get('.todo-list li')     // apuntamos a los dos 'li' que tenemos en nuestro dom
        .should('have.length', 2)   // verificamos que aparecen dos 'li'
        .and($li => {              
            expect($li.get(0).textContent, 'first-item').to.equal('Todo-a')
            expect($li.get(1).textContent, 'second-item').to.equal('Todo-b')
      
        /*  con '.and' evitamos reescribir .should, ya que nos permite encadenar validaciones
            escribimos '$li' porque es el elemento del DOM que cypress nos va a entregar
            con 'expect lig.get0 le estamos diciendo que nos busque el primer 'li' de la lista
            con 'textContent' obtiene el contenido de nuestro 'li'
            por ultimo, con 'to.equal()' comprueba la igualdad
        */
        })                      
    })
});