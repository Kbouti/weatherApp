console.log(`test`)

// This is the main js file for development. I can make compartmentalized js files and import their functions here. Webpack will bundle in ./dist/main.js and read from there

import {
    testApi,
    fetchAPI
} from './fetchAPI.js';

import {
    addFormListeners
} from './form.js'

addFormListeners();
testApi()
fetchAPI(`tacoma`);