//put your code here
//input:массив чисел
//output: отфильтрованный массив чисел

//1. create function getSpecialNumbers
//2. rewrite value to another array
//3. use array method filter

function getSpecialNumbers(array) {
  const newArray = [...array];
  return newArray.filter((num) => num % 3 === 0);
}
