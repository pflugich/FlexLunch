exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    // 'protractor_test.js',
    // 'heise_test.js',
    'flexlunch_test.ts'
  ],
  multiCapabilities: [
    {
      browserName: 'firefox',
      loggingPrefs: {
        driver: 'ALL',
        server: 'ALL',
        browser: 'ALL'
      }
    },
    {
      browserName: 'chrome',
      loggingPrefs: {
        driver: 'ALL',
        server: 'ALL',
        browser: 'ALL'
      }
    }
  ]
};
