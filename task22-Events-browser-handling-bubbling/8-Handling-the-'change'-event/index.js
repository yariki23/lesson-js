const input = document.querySelector(".text-input");
const showText = (event) => {
  console.log(event.target.value);
};

input.addEventListener("change", showText);
