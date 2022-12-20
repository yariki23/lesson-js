//put your code here

//algo
//1. check isArray
//2. use map
//3. inside map use conditional operator

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((num) => (num % 2 === 0 ? num + delta : num));
}
