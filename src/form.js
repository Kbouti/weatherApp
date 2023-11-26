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


async function formSubmit(e) {
  e.preventDefault();
  let userInput = cityInput.value;
  let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${userInput}`, {mode: 'cors'})
  response.json().then(function(response){
    console.log(`response from ${userInput} in formSubmit function:`);
    console.log(response);
    let temp = response.current.temp_f
    console.log(`The current temperature in ${userInput} is ${temp} degrees farenheit`);
  });
}

// ***************************************************************************************************************************************
// Ok, now we've accessed the data. Now we need to do something with it. 
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
