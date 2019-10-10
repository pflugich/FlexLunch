/**import { Config } from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    // 'protractor_test.js',
    // 'heise_test.js',
    'flexlunch_test.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  }
};*/

'use strict';
exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  specs: ['flexlunch_test.ts'],
  SELENIUM_PROMISE_MANAGER: false,
  beforeLaunch() {
    require('ts-node').register({
      project: '.'
    });
  }
};
