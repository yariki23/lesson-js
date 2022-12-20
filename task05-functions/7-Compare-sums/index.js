function compareSums(a, b, c, d) {
  function sum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
      sum += i;
    }
    return sum;
  }
  const sumFirst = sum(a, b);
  const sumSecond = sum(c, d);
  return sumFirst > sumSecond;
}
