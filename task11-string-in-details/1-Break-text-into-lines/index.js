//put your code here
//algo
//1.check streeng
//2.create arr
//3. use while

function splitText(str, len = 10) {
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
    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    count += len;
  }
  return arr.join("\n");
}
