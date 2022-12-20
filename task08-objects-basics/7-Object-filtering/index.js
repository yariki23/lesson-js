/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */
//algo
//1. create new obj
//2. use for..in
//3.add value > 18 in new obj
const getAdults = (obj) => {
  const goodAge = {};

  for (let el in obj) {
    if (obj[el] >= 18) {
      goodAge[el] = obj[el];
    }
  }
  return goodAge;
};

// examples
getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
