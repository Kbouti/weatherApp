
const form = document.getElementById(`form`);




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

export { addListener };
