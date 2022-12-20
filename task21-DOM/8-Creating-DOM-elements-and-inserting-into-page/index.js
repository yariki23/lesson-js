export function createButton(buttonText) {
  const buttonCreate = document
    .querySelector("body")
    .append(document.createElement("button"));
  document.querySelector("button").textContent = buttonText;
}
