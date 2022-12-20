//put your code here

//algo
//1. use filter
//2. inside filter use indexOf for text
//3. use length for text

function filterNames(arr, text) {
  return arr.filter((name) => name.indexOf(text) !== -1 && name.length > 5);
}
