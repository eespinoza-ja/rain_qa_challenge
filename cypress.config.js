const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,

  e2e: {
    specPattern: "cypress/integration/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});
