const inputChange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputChange.addEventListener("input", textSize);
function textSize() {
  text.style.fontSize = `${inputChange.value}px`;
}
textSize();
