//? Function with a context
function showName(firstPart, lastPart) {
  console.log(`${this[firstPart]} ${this[lastPart]}`);
}

const user = {
  firstName: "Yaroslav",
  lastName: "Shergin",
};

showName.call(user, "firstName", "lastName"); //! Yaroslav Shergin
showName.apply(user, ["firstName", "lastName"]); //! Yaroslav Shergin

const newShowName = showName.bind(user, "firstName", "lastName");
newShowName(); //! Yaroslav Shergin
