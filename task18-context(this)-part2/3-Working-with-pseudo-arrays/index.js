//put your code here
/*
algo
1.create func sumOfSquares
2.use reduce whit spread
*/
export function sumOfSquares() {
  return [...arguments].reduce((acc, arg) => {
    return acc + arg ** 2;
  }, 0);
}
