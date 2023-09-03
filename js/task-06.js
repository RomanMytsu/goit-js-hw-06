const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const expectedLength = Number(textInput.dataset.length);
  const inputLength = textInput.value.trim().length;
  textInput.classList.remove("valid", "invalid");

  if (inputLength === expectedLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
