import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://qa-external-alb.adp-qa.aws.domgencloud.net/',
    // specPattern: '**/e2e/*.ts',
    // supportFile: './cypress/support/e2e.ts',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    viewportWidth: 1500,
    viewportHeight: 1000,
    taskTimeout: 60000,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    testIsolation: true,
    retries: {
      openMode: 0,
      runMode: 1,
    },
    redirectionLimit: 100,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 10,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
