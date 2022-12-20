"use strict";

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = (num) => {
  const arr = [];
  arr.push(Math.floor(num * 100) / 100);
  arr.push(Math.trunc(num * 100) / 100);
  arr.push(Math.ceil(num * 100) / 100);
  arr.push(Math.round(num * 100) / 100);
  arr.push(+num.toFixed(2));
  return arr;
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
