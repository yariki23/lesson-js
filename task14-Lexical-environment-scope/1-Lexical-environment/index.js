//put your code here
//input: string
//return: two functions

//algo
//1.create var message
//2. create function sendMessage and show in console
//3. create function setMessage
"use strict";
let message = "Just learn it";
export function sendMessage(name) {
  let sender = "Gromcode";
  console.log(`${name}, ${message}! Your ${sender}`);
}
export function setMessage(text) {
  message = text;
}
