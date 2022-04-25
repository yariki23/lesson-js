"use strict";
const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const btnClear = document.querySelector(".clear-btn");

const removeHandles = document.querySelector(".remove-handlers-btn");
const attachHandles = document.querySelector(".attach-handlers-btn");
let booleanForHandlers = true;
const onHandles = () => {
  booleanForHandlers = true;
};
const offHandles = () => {
  booleanForHandlers = false;
};

removeHandles.addEventListener("click", offHandles);
attachHandles.addEventListener("click", onHandles);

const eventsListElem = document.querySelector(".events-list");
const clearArea = () => {
  eventsListElem.innerHTML = "";
};
clearArea();

const logTarget = (text, color) => {
  if (booleanForHandlers) {
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
  }
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

divElem.addEventListener("click", logGreyDiv, true);
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGreyP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGreySpan, true);
spanElem.addEventListener("click", logGreenSpan);

btnClear.addEventListener("click", clearArea);

