//put your code here
function sortAsc(array) {
  array.sort((a, b) => a - b);
  return array;
}
function sortDesc(array) {
  array.sort((a, b) => a - b);
  array.reverse();
  return array;
}
