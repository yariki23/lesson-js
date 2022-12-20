//put your code here

//algo

//1.create func and inside create val count
//2.create anonymous function

export function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
