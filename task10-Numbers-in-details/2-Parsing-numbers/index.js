//put your code here
function getParsedIntegers(arr) {
  const newArr = [...arr];
  return newArr.map((val) => Number.parseInt(val));
}
function getParsedIntegersV2(arr) {
  const newArr = [...arr];
  return newArr.map((val) => parseInt(val));
}
function getParsedFloats(arr) {
  const newArr = [...arr];
  return newArr.map((val) => Number.parseFloat(val));
}
function getParsedFloatsV2(arr) {
  const newArr = [...arr];
  return newArr.map((val) => parseFloat(val));
}
