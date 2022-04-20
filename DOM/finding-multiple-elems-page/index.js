"use strict";

function getItemList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}
getItemList();

function getItemsArray() {
  const elementsArray = document.querySelectorAll(".tool");
  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
}
getItemsArray();
