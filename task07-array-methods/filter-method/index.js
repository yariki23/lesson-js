/*
***for func sorDesc ***
input: array
return: new sort array

***for func callback inside method sort()***
input:element and next element
return: boolean


1. create function sortDesc
2. create new arr and rewrite values from array
3. use method sort
*/

function sortDesc(array) {
  const newArray = [...array];
  return newArray.sort((num, nextNum) => nextNum - num);
}
