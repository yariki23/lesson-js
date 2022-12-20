"use strict";

/**
 * @param {number[]} arr
 * @return {number}
 */
//algo
//1.check arr
//2. use Math.abs
//3. use Math.max
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absVal = arr.map((num) => Math.abs(num));

  const max = Math.max(...absVal);
  return max;
};

// examples
getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
