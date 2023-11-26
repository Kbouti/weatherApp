import { fetchAPI } from "./fetchAPI";

const form = document.getElementById(`form`);
const unitButton = document.getElementById(`unitButton`);
const cityInput = document.getElementById(`cityInput`);

function testForm() {
  console.log(`form.js has loaded`);
}
function addFormListeners() {
  form.addEventListener(`submit`, (e) => {
    formSubmit(e);
  });
  unitButton.addEventListener(`click`, () => {
    toggleUnits();
  });
}

function getUserInput() {
  let userInput = cityInput.value;
  console.log(userInput);
  return userInput;
}

// ***************************************************************************************************************************************
// Not sure if this needs to be an asyn function - prolly not. FetchAPI is asyn.
async function formSubmit(e) {
  e.preventDefault();
  let userInput = getUserInput();
  let response = fetchAPI(userInput);
  console.log(`response from ${userInput} in formSubmit function:`);
  console.log(response);
}
// The problem exists here in this function. Out async fetchAPI function is properly handling the promise to get a response from the API.
// This function calls the fetchAPI function, then immedietely console.logs response -- which is still an empty promise at this point
// ***************************************************************************************************************************************

function toggleUnits() {
  if (unitButton.classList.contains(`farenheit`)) {
    unitButton.classList.remove(`farenheit`);
    unitButton.classList.add(`celcius`);
    unitButton.innerHTML = `&#8451;`;
    console.log(`toggle triggered`);
    return;
  } else {
    console.log(`toggle triggered`);
    unitButton.classList.remove(`celcius`);
    unitButton.classList.add(`farenheit`);
    unitButton.innerHTML = `&#8457;`;
    return;
  }
}

export { testForm, addFormListeners };
