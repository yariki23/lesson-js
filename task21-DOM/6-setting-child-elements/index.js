export function setButton(buttonText) {
  const addButton = (document.querySelector(
    "body"
  ).innerHTML = `<button>${buttonText}</button>`);
}
