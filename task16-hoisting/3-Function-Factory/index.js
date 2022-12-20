//put your code here
// input num
//return array from function

//algo
//1. check number
//2. use for
//3. if havan`t arg return empty array

export const createArrayOfFunctions = (num) => {
  if (typeof num === "number" || num === undefined) {
    const arrayFromFunc = [];
    for (let i = 0; i < num; i += 1) {
      arrayFromFunc[i] = function () {
        return i;
      };
    }
    return arrayFromFunc;
  }
  return null;
};
