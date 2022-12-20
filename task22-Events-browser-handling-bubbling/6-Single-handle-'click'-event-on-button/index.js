const btn = document.querySelector(".single-use-btn");

const showText = () => {
  console.log("clicked");
  btn.removeEventListener("click", showText);
};
btn.addEventListener("click", showText);
