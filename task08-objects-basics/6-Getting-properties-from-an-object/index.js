/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */
//algo
//1. create new obj
//2. use forEach for array and callback
//3.check obj.key === arr[value]

const pickProps = (obj, props) => {
  const sortObj = {};

  for (let el in obj) {
    props.forEach((value) => (el === value ? (sortObj[el] = obj[el]) : false));
  }
  return sortObj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]); // ==> { a: 1, c: 3 }
