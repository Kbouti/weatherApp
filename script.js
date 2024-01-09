
// Weather API site: https://www.weatherapi.com/my/

// My weather API key: d261db3fd8fb4676bde201850231611

// Weather API request template: 
// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london

// My weather request for tacoma: 
// https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=tacoma

    
async function fetchAPI(city){
  console.log(`fetchAPI function is requesting data for ${city}.`)
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${city}`, {mode: 'cors'})
  console.log(`fetchAPI function  has awaited a response for ${city}.`)
  response.json().then(function(response){
    console.log(`fetchAPI function has parsed a response for ${city}. the response is:`);
    console.log(response);
    return response
  })
}


const cityName = document.getElementById(`cityName`);
const currentTemp = document.getElementById(`currentTemp`);
const conditions = document.getElementById(`conditions`);
const wind = document.getElementById(`wind`);
const region = document.getElementById(`region`);
const country = document.getElementById(`country`);
const unitButton = document.getElementById(`unitButton`);

// location, region, country, conditions, tempF, tempC, windMPH, windKPH

function updateBoard(array) {
  cityName.innerHTML = array[0];
  region.innerHTML = array[1] + "," + " ";
  country.innerHTML = array[2];
  conditions.innerHTML = array[3];

  if (unitButton.classList.contains(`farenheit`)){
    currentTemp.innerHTML = array[4] + `&#8457;`;
    wind.innerHTML = array[6] + `MPH`
  } else {
    currentTemp.innerHTML = array[5] + `&#8451;`;
    wind.innerHTML = array[7] + `KPH`
  }
}



const form = document.getElementById(`form`);
// const unitButton = document.getElementById(`unitButton`);
const cityInput = document.getElementById(`cityInput`);
const weatherBoard = document.getElementById(`weatherBoard`);


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







addFormListeners();
fetchAPI(`tacoma`);

