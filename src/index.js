console.log(`index.js has loaded`)

// This is the main js file for development. I can make compartmentalized js files and import their functions here. Webpack will bundle in ./dist/main.js and read from there

import {
    testApi,
    fetchAPI
} from './fetchAPI.js';

import {
    testForm,
    addFormListeners
} from './form.js'

testApi();
testForm();
addFormListeners();
fetchAPI(`tacoma`);
