const cityName = document.getElementById(`cityName`);
const currentTemp = document.getElementById(`currentTemp`);
const conditions = document.getElementById(`conditions`);
const wind = document.getElementById(`wind`);
const region = document.getElementById(`region`);
const country = document.getElementById(`country`);

// location, region, country, conditions, tempF, tempC, windMPH, windKPH

function updateBoard(array) {
  cityName.innerHTML = array[0];
  region.innerHTML = array[1] + "," + " ";
  country.innerHTML = array[2];
  conditions.innerHTML = array[3];

  currentTemp.innerHTML = temp;
  precipitation.innerHTML = rain;
  wind.innerHTML = wind;
}

export { updateBoard };
