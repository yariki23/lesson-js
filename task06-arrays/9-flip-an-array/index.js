// put your code here
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.reverse();
  return newArr;
}
