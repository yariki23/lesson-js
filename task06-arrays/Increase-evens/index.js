"use strict";

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + delta);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
