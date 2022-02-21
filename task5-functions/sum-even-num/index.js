function getSum(startNum, endNum) {
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
