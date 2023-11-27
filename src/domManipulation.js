const cityName = document.getElementById(`cityName`);
const currentTemp = document.getElementById(`currentTemp`);
const precipitation = document.getElementById(`precipitation`);
const windConditions = document.getElementById(`windConditions`);


// location, region, country, conditions, tempF, tempC, windMPH, windKPH

function updateBoard(array) {
  cityName.innerHTML = city;
  currentTemp.innerHTML = temp;
  precipitation.innerHTML = rain;
  windConditions.innerHTML = wind;
}

export {updateBoard}