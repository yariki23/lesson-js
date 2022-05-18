"use strict";

const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumber1 = getValueWithDelay(56, 1000);
const asyncNumber2 = getValueWithDelay(4, 2000);
const asyncNumber3 = getValueWithDelay(10, 3000);

const getSum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers).then((numbers) => getSum(numbers));
};

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3).then((result) =>
  console.log(result)
);
