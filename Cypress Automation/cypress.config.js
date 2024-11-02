const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    "Tricentisurl":"https://demowebshop.tricentis.com/"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
     
    },
  },
});
