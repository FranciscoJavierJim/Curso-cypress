class inventoryPage{ // declara una clase llamada inventoryPage. Representa la pagina de inventario (justo despues de hacer el login)
    elements = { // // crea una propiedad de clase llamada 'elements'. Aqui agruparemos funciones que devuelven localizadores de cypress
        titleSpan: () => cy.get('.title') // definimos titleSpan, una funcion que ejecuta 'cy.get...' Es decir, busca el elemento que tenga la clase CSS .title (el encabezado que dice 'products' en saucedemo)
    }

}

module.exports = new inventoryPage();