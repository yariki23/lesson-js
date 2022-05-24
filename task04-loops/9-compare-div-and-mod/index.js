const endNumber = 1000;
let sum = 0;
let div, mod;
const dividerNum = 1234;

for (let i = 1; i <= endNumber; i++) {
  sum += i;
}
div = sum / dividerNum;
mod = sum % dividerNum;
console.log(div > mod);
