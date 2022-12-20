export function manageClasses() {
  const oneList = document.querySelector(".one");
  oneList.classList.add("selected");
  //   console.log(oneList);

  const twoList = document.querySelector(".two");
  twoList.classList.remove("selected");
  //   console.log(twoList);

  const threeList = document.querySelector(".three");
  threeList.classList.toggle("three_done");
  //   console.log(threeList);

  const fourList = document.querySelector(".four");
  if (fourList.classList.contains("some-class")) {
    fourList.classList.add("another-class");
  }
  //   console.log(fourList);
}
