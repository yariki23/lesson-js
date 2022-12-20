//algo
//1.check integer
//2. use for
//3. use Math.floor and Math.ceil
const getRandomNumbers = (length, from, to) => {
  let minVal = Math.ceil(from);
  let maxVal = Math.floor(to);
  if (maxVal - minVal <= 0) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * (maxVal - minVal) + minVal));
  }
  return arr;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
