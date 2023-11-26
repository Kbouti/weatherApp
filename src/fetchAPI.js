function testApi() {
console.log(`fetchAPI.js has loaded`)
}

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

export { testApi,
fetchAPI
};
