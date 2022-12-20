//put your code here
function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let individualNumbers = new Set(array);
  const newArray = [...individualNumbers];
  return newArray.length;
}
