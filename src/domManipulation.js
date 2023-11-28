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

export { updateBoard };
