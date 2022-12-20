//algo
//1. create new arr
//2. use Object values
//3. use map for val
//4.use again object values and push name in empty arr
const getPeople = (obj) => {
  const createArr = Object.values(obj);
  const nameArr = [];
  createArr.map((val) =>
    val.map((name) => nameArr.push(Object.values(name).join("")))
  );
  return nameArr;
};
