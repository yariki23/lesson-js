/*
func defer
in: arguments: obj(func) and num
out: obj(func)

algo
1. create function defer
2. create function sum
3.use arrow function inside defer
*/

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: "Tom",
  sayHi: function () {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferHi = defer(user.sayHi, 2000);
deferHi.call({ name: "Bob" });
