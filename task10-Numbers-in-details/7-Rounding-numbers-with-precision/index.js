"use strict";

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
//algo
//1. create arr
//2.push all values on arr
const superRound = (num, prec) => {
  let valFloat = 1;
  for (let i = 0; i < prec; i += 1) {
    valFloat *= 10;
  }
  const arr = [
    Math.floor(num * valFloat) / valFloat,
    Math.trunc(num * valFloat) / valFloat,
    Math.ceil(num * valFloat) / valFloat,
    Math.round(num * valFloat) / valFloat,
    +num.toFixed(prec),
  ];
  return arr;
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
