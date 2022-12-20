const input = document.querySelector(".search__input");
const btn = document.querySelector(".search__btn");

const showText = () => console.log(input.value);
btn.addEventListener("click", showText);
