//put your code here

//algo
//1. check isArray
//2. use method reduce

function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((num, nextNum) => num + nextNum);
}
