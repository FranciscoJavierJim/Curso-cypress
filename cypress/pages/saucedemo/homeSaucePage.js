class homeSaucePage{        // declara una clase llamada 'homeSaucePage' que usaremos con page object para la pantalla de login
    elements = {            // crea una propiedad de clase llamada 'elements'. Aqui agruparemos funciones que devuelven localizadores de cypress
        usernameInput: () => cy.get('#user-name'), // es una funcion que, cuando la llamamos, ejecuta 'cy.get...' para obtener el campo de usuario por su id
        passwordInput: () => cy.get('#password'),  // igual que arriba, pero para el campo de la contraseña
        loginButton: () => cy.get('#login-button'),// devuelve el boton de login
        errorMessage: () => cy.get('h3[data-test="error"]') // devuelve el elemento del mensaje de error
    }

    typeUsername(username){ //metodo de la clase que escribe el 'username'
        this.elements.usernameInput().type(username) //llama a la funcion (asegurando que el cy.get se ejecute cada vez que lo usamos) y teclea el valor recibido
    }

    typePassword(password){
        this.elements.passwordInput().type(password) // exactamente igual para la contraseña
    }

    clickLogin(){
        this.elements.loginButton().click(); // hace click en el boton de login
    }

}

module.exports = new homeSaucePage(); // //exporta una instancia ya creada de la clase usando CommonJS. De esta forma, podemos requerirlo en los test y usarla directamente