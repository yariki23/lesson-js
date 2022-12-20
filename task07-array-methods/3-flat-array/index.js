//input: Array
//return: flat array;

//algo
//1. create new var and put values from array
//2. use method array reduce with concat
//3. use method array sort

const flatArray = (arr) =>
  arr.reduce((acc, num) => {
    return acc.concat(num).sort((a, b) => a - b);
  }, []);
