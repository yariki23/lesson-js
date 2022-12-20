const checkbox = document.querySelector(".task-status");
const showText = (event) => {
  console.log(event.target.checked);
};

checkbox.addEventListener("change", showText);
