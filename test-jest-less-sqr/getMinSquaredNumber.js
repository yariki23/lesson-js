export function getMinSquaredNumber(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const squareArray = array.map((num) => num * num);
  return Math.min(...squareArray);
}

console.log(getMinSquaredNumber("dssad]"));
// console.log([-777, -20, -2, 6, 45, 3]);
