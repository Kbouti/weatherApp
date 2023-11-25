
const form = document.getElementById(`form`);

const unitButton = document.getElementById(`unitButton`)


function addListener() {
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    let cityInput = document.getElementById(`cityInput`);

    let userInput = cityInput.value;

    console.log(`form submitted`);
    console.log(userInput);

    alert(`You submitted the form`);
    return userInput;
  });
}

function toggleUnits(){
    if (unitButton.classList.contains(`farenheit`)){
        unitButton.classList.remove(`farenheit`);
        unitButton.classList.add(`celcius`);
        unitButton.innerHTML = `&#8451;`
        return;
    } else {
        unitButton.classList.remove(`celcius`);
        unitButton.classList.add(`farenheit`);
        unitButton.innerHTML = `&#8457;`
        return;
    }
}

export { addListener };
