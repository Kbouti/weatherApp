(()=>{"use strict";const e=document.getElementById("form"),t=document.getElementById("unitButton"),n=document.getElementById("cityInput");console.log("test"),e.addEventListener("submit",(e=>{!function(e){e.preventDefault(),function(){let e=n.value;console.log(e)}()}(e)})),t.addEventListener("click",(()=>{t.classList.contains("farenheit")?(t.classList.remove("farenheit"),t.classList.add("celcius"),t.innerHTML="&#8451;",console.log("toggle triggered")):(console.log("toggle triggered"),t.classList.remove("celcius"),t.classList.add("farenheit"),t.innerHTML="&#8457;")})),console.log("shitsnack fuckery from the api.js file"),console.log("even more shit fuckery"),async function(e){const t=await fetch("https://api.weatherapi.com/v1/current.json?key=d261db3fd8fb4676bde201850231611&q=tacoma");console.log(t),t.json().then((function(e){console.log(e)}))}()})();