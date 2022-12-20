const checkbox = document.querySelector(".task-status");
const showText = () => console.log(checkbox.checked);
checkbox.addEventListener("change", showText);
