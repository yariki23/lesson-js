//put your code here
function getFiniteNumbers(arr) {
  const newArr = [...arr];
  return newArr.filter((val) => Number.isFinite(val));
}
function getFiniteNumbersV2(arr) {
  const newArr = [...arr];
  return newArr.filter((val) => isFinite(val));
}
function getNaN(arr) {
  const newArr = [...arr];
  return newArr.filter((val) => Number.isNaN(val));
}
function getNaNV2(arr) {
  const newArr = [...arr];
  return newArr.filter((val) => isNaN(val));
}
function getIntegers(arr) {
  const newArr = [...arr];
  return newArr.filter((val) => Number.isInteger(val));
}
