const checkbox1 = document.querySelector(".pagination__page:nth-child(1)");
const checkbox2 = document.querySelector(".pagination__page:nth-child(2)");
const checkbox3 = document.querySelector(".pagination__page:nth-child(3)");
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

checkbox1.addEventListener("click", handleClick);
checkbox2.addEventListener("click", handleClick);
checkbox3.addEventListener("click", handleClick);
