//algo
//1. create arr and use method join
//2. need use switch case

function calc(str) {
  let result;
  const [a, operator, b] = str.split(" ");
  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  return `${a} ${operator} ${b} = ${result}`;
}
