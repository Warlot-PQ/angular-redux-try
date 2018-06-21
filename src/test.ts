// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js'; // ES6 + reflect-metadata
// zone.js
import 'zone.js/dist/zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/jasmine-patch';
// TestBed initialization
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
// all test
// const context = require.context('./', true, /\.spec\.ts$/);
// Single test
const context = require.context('./', true, /giftcard\.component\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
