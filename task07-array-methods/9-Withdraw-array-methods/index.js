"use strict";
//return: balance client or -1 if balance less amount

//algo
//1.use indexOf
//2. use ?
//3. use index for search balance

const withdraw = (clients, balances, client, amount) => {
  let indexClient = clients.indexOf(client);
  return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
};

//example 1:

//input
withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]
