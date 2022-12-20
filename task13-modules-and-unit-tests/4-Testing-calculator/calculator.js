export function getSquaredArray(array) {
  return array.map((val) => val * val);
}

export function getOddNumbers(array) {
  return array.filter((num) => num % 2 === 1);
}

export default (a, b) => a + b;
