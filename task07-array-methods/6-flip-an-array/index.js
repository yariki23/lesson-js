//put your code here

//algo
//1. array check
//2. create new arr
//3. use method reverse

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const revArr = [...arr];
  return revArr.reverse();
}
