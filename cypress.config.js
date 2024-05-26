const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  
  e2e: {
    viewportHeight: 960,
    viewportWidth: 1538,
    chromeWebSecurity: false,
    includeShadowDom: true,
    retries:{
      runMode: 1,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
