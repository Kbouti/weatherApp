function addListener() {
  const form = document.getElementById(`form`);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault;
    console.log(`form submitted`);
    alert(`You submitted the form`);
    return;
  });
  // This isn't working yet
}

export { addListener };
