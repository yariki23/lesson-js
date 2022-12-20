"use strict";

/**
 * @param {function} func
 * @return {function}
 */
/*
function saveFuncCalls
in: function
out: function
*/
export function saveFuncCalls(func) {
  const array = [];
  function withMemory(...args) {
    array.push(args);
    withMemory.calls = array;
    return func.apply(this, args);
  }
  return withMemory;
}

// example 1
/*
function
in: num
out: num
*/
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
sumWithMemory.calls = [];
sumWithMemory(4, 2);
sumWithMemory(9, 1);

sumWithMemory.calls;
// example 2
/*
function addDelta
in: array
out: array
*/
function addDelta(array, delta) {
  return array.map((el) => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
addDeltaWithMemory.calls = [];
addDeltaWithMemory([111, 22, 55, 4], 8);
addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7);

addDeltaWithMemory.calls; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// // example 3
// const user = {
//   name: 'John',
//   sayHi() {
//     return this.name;
//   },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.calls); // [ [] ]
