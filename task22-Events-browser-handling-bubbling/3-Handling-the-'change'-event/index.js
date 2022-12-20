const input = document.querySelector(".text-input");
const showText = () => console.log(input.value);
input.addEventListener("change", showText);
