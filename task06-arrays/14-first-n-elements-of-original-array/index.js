const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  for (let i = 0; i < numberOfElements; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
