
const path = require('node:path');

exports.config = {
  runner: 'local',

  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  specs: ['./test/specs/**/*.spec.js'],

  maxInstances: 1,

  logLevel: 'warn',

  framework: 'mocha',
  reporters: ['spec'],

  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,

  capabilities: [{
    platformName: 'Android',

    'appium:automationName': 'UiAutomator2',

    'appium:deviceName': 'Android Emulator',

    'appium:app': path.resolve(
      __dirname,
      'app',
      'ApiDemos-debug.apk'
    ),

    'appium:appPackage': 'io.appium.android.apis',

    'appium:appActivity':
      'io.appium.android.apis.ApiDemos',

    'appium:newCommandTimeout': 120,

    'appium:autoGrantPermissions': true
  }],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  }
};
