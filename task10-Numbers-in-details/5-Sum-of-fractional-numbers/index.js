//put your code here
//algo
//1. use reduce
//2.toFix

function getTotalPrice(arr) {
  const sum = arr.reduce((num, nextNum) => num + nextNum);
  return `$${Math.floor(sum * 100) / 100}`;
}
