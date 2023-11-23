function testApi() {
  console.log(`shitsnack fuckery from the api.js file`);
  console.log(`even more shit fuckery`);
}

// Weather API site: https://www.weatherapi.com/my/

// My weather API key: d261db3fd8fb4676bde201850231611

// Weather API request template: 
// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london

// My weather request for tacoma: 
// https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=tacoma


async function fetchAPI(){
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=tacoma')

  console.log(response)
  response.json().then(function(response){
    console.log(response)
  })

}

export { testApi,
fetchAPI
};
