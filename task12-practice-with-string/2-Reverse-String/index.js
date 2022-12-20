//put your code here

//algo
//1. check string
//2. use split
//3. use reverse
//4. use join

function reverseString(str) {
  if ("string" !== typeof str) {
    return null;
  }
  return str.split("").reverse().join("");
}
