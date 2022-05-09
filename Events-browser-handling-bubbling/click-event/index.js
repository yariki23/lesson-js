"use strict";

const checkbox = document.querySelector(".pagination__page");

// const handleClick = (event) => {
//   console.log(event.target.dataset.pageNumber);
// };

Array.from(checkbox).map((check) => {
  check.addEventListener("click", (event) => {
    console.log(event.target.dataset.pageNumber);
  });
});
