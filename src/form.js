const form = document.getElementById(`form`);

const unitButton = document.getElementById(`unitButton`);
const cityInput = document.getElementById(`cityInput`);

function addFormListeners() {
  form.addEventListener(`submit`, (e) => {
    formSubmit(e);
  });
  unitButton.addEventListener(`click`, () => {
    toggleUnits();
  });
}

function getUserInput() {
  let userInput = cityInput.value;
  console.log(userInput);
  return userInput;
}

function formSubmit(e) {
  e.preventDefault();
  let userInput = getUserInput();
  getWeather(userInput);
}

function getWeather(city) {}

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

export { addFormListeners };
