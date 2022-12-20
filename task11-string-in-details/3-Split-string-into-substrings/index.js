//put your code here
//algo
//1.check string
//2.use substr
//3.use if for arr.push(str)

function splitString(str, len = 10) {
  if ("string" != typeof str) {
    return null;
  }
  let count = 0;
  const arr = [];
  while (true) {
    let chunk = str.substr(count, len);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length === len) {
      arr.push(chunk);
      count += len;
    } else {
      arr.push(chunk + ".".repeat(len - chunk.length));
      count += len;
    }
  }
  return arr;
}
