/*
algo
1. create class 
2.method getBalance return balance
in: num
return: num
3.method deposit 
in: num
return: num
4. method withdraw 
in: num
return: num or string
*/
/* eslint max-classes-per-file: ["error", 2] */

export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(val) {
    this._balance += val;
  }

  withdraw(val) {
    if (this._balance < val) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= val;
  }
}
