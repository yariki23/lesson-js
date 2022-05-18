/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
const pinger = (count, period) => {
  let countPing = 1;
  console.log("ping");
  const intervalId = setInterval(() => {
    if (++countPing >= count) {
      clearInterval(intervalId);
    }
    console.log("Ping");
  }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
