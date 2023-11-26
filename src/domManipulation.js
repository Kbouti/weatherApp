const cityName = document.getElementById(`cityName`);
const currentTemp = document.getElementById(`currentTemp`);
const precipitation = document.getElementById(`precipitation`);
const windConditions = document.getElementById(`windConditions`);

function updateBoard(city, units, temp, rain, wind) {
  cityName.innerHTML = city;
  currentTemp.innerHTML = temp;
  precipitation.innerHTML = rain;
  windConditions.innerHTML = wind;
}

export {updateBoard}