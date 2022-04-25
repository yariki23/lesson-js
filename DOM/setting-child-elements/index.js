"use strict";

// const { default: docsUrl } = require("eslint-plugin-import/lib/docsUrl");

// function setButton(buttonText) {
//   const addButton = (document.querySelector(
//     "body"
//   ).innerHTML = `<button>${buttonText}</button>`);

//   console.log(addButton);
// }

// setButton("text");

// function createButton(buttonText) {
//   const buttonCreate = document
//     .querySelector("body")
//     .append(document.createElement("button"));
//   document.querySelector("button").textContent = buttonText;
// }
// createButton("send email");
// let li = document.createElement("li");
// li.textContent = data;
// ul.append(li);

// function finishList() {
//   const list = document.querySelector(".list");
//   const specialLi = document.querySelector(".special");
//   const prependLi = document.createElement("li");
//   const appendLi = document.createElement("li");
//   const beforeLi = document.createElement("li");
//   const afterLi = document.createElement("li");

//   prependLi.textContent = "1";
//   list.prepend(prependLi);

//   appendLi.textContent = "8";
//   list.append(appendLi);

//   beforeLi.textContent = "4";
//   specialLi.before(beforeLi);

//   afterLi.textContent = "6";
//   specialLi.after(afterLi);
// }
//  list.prepend((document.createElement("li").innerHTML = "1"));
//  list.append((document.createElement("li").innerHTML = "8"));
//  specialList.before((document.createElement("li").textContent = "4"));
//  specialList.after((document.createElement("li").textContent = "6"));
//  console.log(document.querySelector("li").innerText);

// finishList();

function getSection(num) {
  const findSpan = document.querySelector(`span[data-number="${num}"`);
  return findSpan.parentNode.dataset.section;
}

getSection(3);
