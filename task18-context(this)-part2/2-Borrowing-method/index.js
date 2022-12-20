"use strict";
//put your code here
/*
algo
1.create obj
2. create getMax and use Math.max whit apply
3. create getMin and use Math.min whit ...
*/

export const wallet = {
  transactions: [4, 43, 2, 50, 1],
  /*
  in: arr
  out: num
  */
  getMin() {
    return Math.min(...this.transactions);
  },
  /*
  in: arr
  out: num
  */
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
};
