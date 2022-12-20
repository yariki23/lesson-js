//put your code here
// algo
//1. check isArray
//2. use reduce

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((num, numNext) => num + numNext) / arr.length;
}
