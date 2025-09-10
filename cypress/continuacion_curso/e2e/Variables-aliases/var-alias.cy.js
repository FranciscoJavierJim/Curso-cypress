describe('Variables y Aliases', () => {  

  beforeEach(function() {               
    cy.visit('https://demoqa.com/modal-dialogs')          
  })                                                                        

  it('Closures and variables', () => {                 // Primer test: "Closures and variables".
    cy.get('#showSmallModal').then($modalbutton => {   // Obtiene el botón del modal pequeño y entra en un .then (acceso al elemento real).
      const smallModalText = $modalbutton.text();      // Extrae el texto del botón (p.ej., "Small modal").
      cy.log(smallModalText);                          // Muestra ese texto en el log de Cypress.

      $modalbutton.click();                            // Hace click en el botón para abrir el modal.
      cy.get('#example-modal-sizes-title-sm')          // Selecciona el título del modal pequeño ya abierto...
        .contains(smallModalText, { matchCase: false });  // ...y comprueba que CONTIENE el texto capturado (sin distinguir mayúsculas/minúsculas).
    })             
  });                                                                    

  it('Aliases', function()  {        // Segundo test: "Aliases". OJO: usamos function() para tener this de Mocha.
    cy.get('#showSmallModal')        // Selecciona el botón de nuevo...
      .invoke('text')                // ...invoca el método jQuery 'text' y obtiene su string como "subject" del comando.
      .as('InvokeText');             // Guarda ese "subject" bajo el alias '@InvokeText' (en el contexto de ESTE test).

    cy.get('#showSmallModal').then($modalbutton => {  // Otra vez el botón, ahora con .then para acceder al elemento real.
      const smallModalText = $modalbutton.text();     // Vuelve a leer el texto del botón en una variable de JS.
      cy.log(smallModalText)                          // Lo saca por el log.

      cy.wrap(smallModalText).as('WrapText');  // Envuelve ese string en un comando Cypress y lo guarda como alias '@WrapText'.
    })                                                                       
  });                                                                       

  it('Share Context', function() {        // Tercer test: "Share Context". De nuevo function() para tener this.
    cy.log("INVOKE: " + this.InvokeText); // Intenta leer el alias '@InvokeText' desde el this de Mocha y loguearlo.
    cy.log("WRAP: " + this.WrapText);     // Intenta leer '@WrapText' desde this y loguearlo.
  })                                                                         

});                                                                         


