/*
algo
1. create func
2. use for...in for func
3.push property in array and return arr

function getOwnProps
in: obj
return: arr
*/

export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (!(typeof obj[prop] === "function")) {
        console.log(prop);
        arr.push(prop);
      }
    }
  }
  return arr;
}
