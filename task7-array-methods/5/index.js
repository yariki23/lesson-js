"use strict";

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  let [firstNum, ...arr] = numbers;
  return [...arr, firstNum];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let arr = [];
  for (let i = 1; i < numbers.length; i++) {
    arr.push(numbers[i]);
  }
  arr.push(numbers[0]);
  return arr;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
