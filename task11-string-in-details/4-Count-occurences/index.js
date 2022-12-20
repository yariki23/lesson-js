//algo
//1. check str
//2. use loop while
//3. use indexOf for str
//4. make let count +=1
const countOccurrences = (str, text = "") => {
  if ("string" !== typeof str || text === "") {
    return null;
  }
  let count = 0;
  let newStr = str;
  while (true) {
    let index = 0;
    index = newStr.indexOf(text);
    if (index === -1 || text === "") {
      break;
    }
    newStr = newStr.slice(index + text.length);
    count += 1;
  }
  return count;
};
