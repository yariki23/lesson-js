//put your code here
//input:массив чисел
//output: отфильтрованный массив чисел

//algo
//1. create function getSpecialNumbers
//2. rewrite value to another array
//3. use array method filter

function getSpecialNumbers(array) {
  return array.filter((num) => num % 3 === 0);
}
