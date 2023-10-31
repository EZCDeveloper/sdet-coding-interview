import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://ultimateqa.com/simple-html-elements-for-automation/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //blockHosts: ['rp.liadm.com'],
  },
});
