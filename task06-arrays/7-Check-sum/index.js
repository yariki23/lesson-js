"use strict";

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  if (sum < 100) {
    return false;
  } else {
    return true;
  }
};

checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
