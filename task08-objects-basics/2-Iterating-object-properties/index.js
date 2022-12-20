//algo
//1. create array
//2. use for..in
//3. push values obj in array

/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = (obj) => {
  const array = [];

  for (let el in obj) {
    array.push(obj[el]);
  }

  return array;
};

// examples
concatProps({ name: "John Doe", age: 17, interest: "football" }); // ==> ['John Doe', 17, 'football']
