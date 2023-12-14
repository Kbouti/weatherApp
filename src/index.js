console.log(`index.js has loaded`)

// This is the main js file for development. I can make compartmentalized js files and import their functions here. Webpack will bundle in ./dist/main.js and read from there
// (That's the goal anyway)

// ********************************************************************************
// Ok, so the following command errors when this css import is present:
// npx webpack --config webpack.config.js
import './style.css';

import {
    testApi,
    fetchAPI
} from './fetchAPI.js';

import {
    testForm,
    addFormListeners,
} from './form.js'

testApi();
testForm();
addFormListeners();
fetchAPI(`tacoma`);

