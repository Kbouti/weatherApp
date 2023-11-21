console.log(`test`)

// This is the main js file for development. I can make compartmentalized js files and import their functions here. Webpack will bundle in ./dist/main.js and read from there

import {
    testApi
} from './fetchAPI.js'

testApi()