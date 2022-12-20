//put your code here
//input array
//return array in square (all values in array)

//algo
//1. array check
//2. use method map

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((value) => value * value);
}
