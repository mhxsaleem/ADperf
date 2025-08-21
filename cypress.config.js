const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-external-alb.adp-qa.aws.domgencloud.net/',
    // specPattern: '**/e2e/*.ts',
    // supportFile: './cypress/support/e2e.ts',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    viewportWidth: 1500,
    viewportHeight: 1000,
    taskTimeout: 60000,
    defaultCommandTimeout: 20000,
    responseTimeout: 20000,
    testIsolation: true,
    retries: {
      openMode: 0,
      runMode: 1,
    },
    redirectionLimit: 100,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 2,
    video: true,
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // TypeScript support will be handled by ts-node and webpack batteries included
      return config;
    },
  },
});
