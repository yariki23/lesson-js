const btnFirst = document.querySelector(".btn:nth-child(1)");
const btnSecond = document.querySelector(".btn:nth-child(2)");
const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnFirst.addEventListener("click", handleClick);
btnSecond.addEventListener("click", handleClick);
