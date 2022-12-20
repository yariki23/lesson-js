/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  let count;
  for (let i = 1; i <= num; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        ++count;
      }
    }
    if (count === 2) {
      console.log(i);
    }
  }
}
