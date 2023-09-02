const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  const name = textInput.value.trim();
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});
