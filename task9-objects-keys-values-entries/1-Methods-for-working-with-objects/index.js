//put your code here
function getAdults(obj) {
  const valueObj = Object.entries(obj);
  return valueObj.filter((value) => value[1] >= 18).map((el) => el[0]);
}
