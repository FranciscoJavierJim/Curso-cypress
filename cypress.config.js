const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Registrar el reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',   // Carpeta donde se guardarán los reportes
      charts: true,                   // Mostrar gráficos en el HTML
      reportPageTitle: 'Reporte de Prueba Cypress',
      embeddedScreenshots: true,      // Incluir capturas de pantalla en el reporte
      inlineAssets: true,             // Para incrustar CSS/JS y poder abrir HTML standalone
      saveAllAttempts: false          // Guardar solo el intento final de cada test
    }
  },
});
