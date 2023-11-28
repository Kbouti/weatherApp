(()=>{"use strict";const e=document.getElementById("cityName"),n=document.getElementById("currentTemp"),t=document.getElementById("conditions"),o=document.getElementById("wind"),c=document.getElementById("region"),s=document.getElementById("country"),i=document.getElementById("unitButton");function r(r){e.innerHTML=r[0],c.innerHTML=r[1]+", ",s.innerHTML=r[2],t.innerHTML=r[3],i.classList.contains("farenheit")?(n.innerHTML=r[4]+"&#8457;",o.innerHTML=r[6]+"MPH"):(n.innerHTML=r[5]+"&#8451;",o.innerHTML=r[7]+"KPH")}const d=document.getElementById("form"),a=document.getElementById("unitButton"),l=document.getElementById("cityInput"),u=document.getElementById("weatherBoard");console.log("index.js has loaded"),console.log("fetchAPI.js has loaded"),console.log("form.js has loaded"),d.addEventListener("submit",(e=>{!async function(e){e.preventDefault();let n=l.value;(await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${n}`,{mode:"cors"})).json().then((function(e){console.log(`response from ${n} in formSubmit function:`),console.log(e);let t=e.location.name,o=e.location.region,c=e.location.country,s=e.current.temp_f,i=e.current.temp_c;r([t,o,c,e.current.condition.text,s,i,e.current.wind_mph,e.current.wind_kph]),u.classList.remove("hidden")}))}(e)})),a.addEventListener("click",(()=>{a.classList.contains("farenheit")?(a.classList.remove("farenheit"),a.classList.add("celcius"),a.innerHTML="&#8451;",console.log("toggle triggered")):(console.log("toggle triggered"),a.classList.remove("celcius"),a.classList.add("farenheit"),a.innerHTML="&#8457;")})),async function(e){console.log(`fetchAPI function is requesting data for ${e}.`);const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=${e}`,{mode:"cors"});console.log(`fetchAPI function  has awaited a response for ${e}.`),n.json().then((function(n){return console.log(`fetchAPI function has parsed a response for ${e}. the response is:`),console.log(n),n}))}("tacoma")})();