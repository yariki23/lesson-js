"use strict";

function getTitleElement() {
  const titleElem = document.querySelector(".title");
  console.dir(titleElem);
  return titleElem;
}
getTitleElement();
function getInputElement() {
  const inputElem = document.querySelector('[type="text"]');
  console.log(inputElem);
  return inputElem;
}
getInputElement();
