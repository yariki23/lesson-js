//put your code here

//algo
//1.check isArray
//2. use ...
function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArr = [...arr];
  return cloneArr;
}
