'use strict';

// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// examples

//algo
//1. get keys, get values
//2. compate every key/value with .every method
//** compare key/values, if .some if not equal - false

function compareObjects(obj1, obj2) {
  const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
  const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

  if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
    return false;
  }

  return firstArrKeyVal.every((value, index) => value === secondArrKeyVal[index]);
}

const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
