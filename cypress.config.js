const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pre-prod.delorocasino.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
