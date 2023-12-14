/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard)\n/* harmony export */ });\nconst cityName = document.getElementById(`cityName`);\nconst currentTemp = document.getElementById(`currentTemp`);\nconst conditions = document.getElementById(`conditions`);\nconst wind = document.getElementById(`wind`);\nconst region = document.getElementById(`region`);\nconst country = document.getElementById(`country`);\nconst unitButton = document.getElementById(`unitButton`);\n\n// location, region, country, conditions, tempF, tempC, windMPH, windKPH\n\nfunction updateBoard(array) {\n  cityName.innerHTML = array[0];\n  region.innerHTML = array[1] + \",\" + \" \";\n  country.innerHTML = array[2];\n  conditions.innerHTML = array[3];\n\n  if (unitButton.classList.contains(`farenheit`)){\n    currentTemp.innerHTML = array[4] + `&#8457;`;\n    wind.innerHTML = array[6] + `MPH`\n  } else {\n    currentTemp.innerHTML = array[5] + `&#8451;`;\n    wind.innerHTML = array[7] + `KPH`\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/domManipulation.js?");

/***/ }),

/***/ "./src/fetchAPI.js":
/*!*************************!*\
  !*** ./src/fetchAPI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAPI: () => (/* binding */ fetchAPI),\n/* harmony export */   testApi: () => (/* binding */ testApi)\n/* harmony export */ });\nfunction testApi() {\nconsole.log(`fetchAPI.js has loaded`)\n}\n\n// Weather API site: https://www.weatherapi.com/my/\n\n// My weather API key: d261db3fd8fb4676bde201850231611\n\n// Weather API request template: \n// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london\n\n// My weather request for tacoma: \n// https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=tacoma\n\n\nasync function fetchAPI(city){\n  console.log(`fetchAPI function is requesting data for ${city}.`)\n  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${city}`, {mode: 'cors'})\n  console.log(`fetchAPI function  has awaited a response for ${city}.`)\n  response.json().then(function(response){\n    console.log(`fetchAPI function has parsed a response for ${city}. the response is:`);\n    console.log(response);\n    return response\n  })\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/fetchAPI.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFormListeners: () => (/* binding */ addFormListeners),\n/* harmony export */   testForm: () => (/* binding */ testForm)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ \"./src/fetchAPI.js\");\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n\n\n\nconst form = document.getElementById(`form`);\nconst unitButton = document.getElementById(`unitButton`);\nconst cityInput = document.getElementById(`cityInput`);\nconst weatherBoard = document.getElementById(`weatherBoard`);\n\nfunction testForm() {\n  console.log(`form.js has loaded`);\n}\n\nfunction addFormListeners() {\n  form.addEventListener(`submit`, (e) => {\n    formSubmit(e);\n  });\n  unitButton.addEventListener(`click`, () => {\n    toggleUnits();\n  });\n}\n\n\nasync function formSubmit(e) {\n  e.preventDefault();\n  let userInput = cityInput.value;\n  let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${userInput}`, {mode: 'cors'})\n  response.json().then(function(response){\n    console.log(`response from ${userInput} in formSubmit function:`);\n    console.log(response);\n    \n    let location = response.location.name;\n    let region = response.location.region;\n    let country = response.location.country;\n    let tempF = response.current.temp_f;\n    let tempC = response.current.temp_c;\n    let conditions = response.current.condition.text;\n    let windMPH = response.current.wind_mph;\n    let windKPH = response.current.wind_kph;\n\n    let responseArray = [location, region, country, conditions, tempF, tempC, windMPH, windKPH];\n   \n    //Now we want to manipulate the Dom with the responseArray\n(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(responseArray);\nweatherBoard.classList.remove(`hidden`);\n  });\n}\n\n\n\nfunction toggleUnits() {\n  if (unitButton.classList.contains(`farenheit`)) {\n    unitButton.classList.remove(`farenheit`);\n    unitButton.classList.add(`celcius`);\n    unitButton.innerHTML = `&#8451;`;\n    console.log(`toggle triggered`);\n    return;\n  } else {\n    console.log(`toggle triggered`);\n    unitButton.classList.remove(`celcius`);\n    unitButton.classList.add(`farenheit`);\n    unitButton.innerHTML = `&#8457;`;\n    return;\n  }\n}\n\n\n\n\n// CSS isn't loading through gh pages site. I tried running the following, and made sure there's a style loader rule in webpack.config file:\n// npm install --save-dev style-loader css-loader\n\n// git subtree push --prefix dist origin-gh-pages\n\n//# sourceURL=webpack://weatherapp/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI.js */ \"./src/fetchAPI.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\nconsole.log(`index.js has loaded`)\n\n// This is the main js file for development. I can make compartmentalized js files and import their functions here. Webpack will bundle in ./dist/main.js and read from there\n\n;\n\n\n\n(0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.testApi)();\n(0,_form_js__WEBPACK_IMPORTED_MODULE_1__.testForm)();\n(0,_form_js__WEBPACK_IMPORTED_MODULE_1__.addFormListeners)();\n(0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__.fetchAPI)(`tacoma`);\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;