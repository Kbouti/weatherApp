import { fetchAPI } from "./fetchAPI";
import { updateBoard } from "./domManipulation";

const form = document.getElementById(`form`);
const unitButton = document.getElementById(`unitButton`);
const cityInput = document.getElementById(`cityInput`);
const weatherBoard = document.getElementById(`weatherBoard`);

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
    
    let location = response.location.name;
    let region = response.location.region;
    let country = response.location.country;
    let tempF = response.current.temp_f;
    let tempC = response.current.temp_c;
    let conditions = response.current.condition.text;
    let windMPH = response.current.wind_mph;
    let windKPH = response.current.wind_kph;

    let responseArray = [location, region, country, conditions, tempF, tempC, windMPH, windKPH];
   
    //Now we want to manipulate the Dom with the responseArray
updateBoard(responseArray);
weatherBoard.classList.remove(`hidden`);
  });
}



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


// CSS isn't loading through gh pages site. I tried running the following, and made sure there's a style loader rule in webpack.config file:
// npm install --save-dev style-loader css-loader

// git subtree push --prefix dist origin-gh-pages