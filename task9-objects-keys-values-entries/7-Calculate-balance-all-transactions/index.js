//algo
//1.create new arr
//2. use map and take amount
//3. use reduce for new arr

const getTotalRevenue = (transactions) => {
  const amountArr = [];
  transactions.map((val) => amountArr.push(val.amount));
  return amountArr.reduce((num, nextNum) => num + nextNum);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
