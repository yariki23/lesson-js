//input: array
//return: array

//algo
//1. use map for array
//2. use parseFloat
//3. use fixedTo
//4. create new arr and push value in this arr
function cleanTransactionsList(array) {
  const priceArray = [];
  array.map((val) => priceArray.push("$" + Number(val).toFixed(2)));
  return priceArray.filter((val) => val !== "$NaN");
}
