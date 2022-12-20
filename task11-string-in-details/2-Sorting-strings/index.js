//put your code here
//algo
//1. check isArray
//2. use sort
//3. check sort true or false

function sortContacts(arr, sort = true) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (sort === true) {
    return arr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sort === false) {
    return arr.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
}
