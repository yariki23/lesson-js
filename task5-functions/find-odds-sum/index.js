function checker(arr) {
  let minValue = Math.min(...arr),
    maxValue = Math.max(...arr);
  let sum = minValue + maxValue;
  return sum > 1000;
}


console.log(checker([-6, -3, 200]));
