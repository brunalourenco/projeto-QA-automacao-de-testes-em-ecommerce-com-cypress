const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout: 5000, //tempo de espera dos commands em segundos
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
