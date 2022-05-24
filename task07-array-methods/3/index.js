function checker(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const sum = minValue + maxValue;
  return sum > 1000;
}
