import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  hideXHR: true,
  numTestsKeptInMemory: 10,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    baseUrl: 'https://ultimateqa.com/simple-html-elements-for-automation/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //blockHosts: ['rp.liadm.com'],
  },
});
