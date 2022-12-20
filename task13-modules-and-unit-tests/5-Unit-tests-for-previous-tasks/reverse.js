export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const revArr = [...arr];
  return revArr.reverse();
};
