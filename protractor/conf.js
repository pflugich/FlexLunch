exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      //'protractor_test.js',
      //'heise_test.js',
      'aps_test,js'
  ],
    multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }]
  };