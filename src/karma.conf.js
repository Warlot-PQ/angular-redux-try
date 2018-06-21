// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-typescript'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    webpack: require('../webpack-dev.config'),
    preprocessors: {
      './test.ts': ['webpack', 'sourcemap']
      // './app/**/*.ts': 'karma-typescript'
      // './app/giftcard/giftcard.component.spec.ts': ['webpack']
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
        transforms: [require("karma-typescript-es6-transform")()]
      },
      tsconfig: "../tsconfig.json"
    },
    files: [
      './test.ts'
      // { pattern: './app/giftcard/giftcard.component.spec.ts', watched: false }
    ],
    exclude: [

    ]
  });
};
