"use strict";

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
//algo
//1. iterate keysList array
//2. add key value to the obj

//V1
// function buildObject(keysList, valuesList) {
//   const newObj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     newObj[keysList[index]] = valuesList[index];
//   }
//   return newObj;
// }

//V2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

//V3
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

//V4
// function buildObject(keysList, valuesList) {
//   keysList.reduce(
//     (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
//     {}
//   );
// }

// //if code doesn't work - split by step

// //test data

// const keysForCountry = ["Ukraine", "Germany"];
// const valueCity = ["Kiev", "Berlin"];
// const result = buildObject(keysForCountry, valueCity); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);
const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-is-2": {
    name: "Tom",
    age: 17,
  },
};

const getCustomersList = (obj) => {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  const customerSortAge = Object.entries(obj);
  const customerId = customerSortAge.map((id) => ({
    id: id[0],
  }));
  return customerSortAge
    .map((customer, index) => ({
      ...customer[1],
      ...customerId[index],
    }))
    .sort((age, nextAge) => age.age - nextAge.age);
};
console.log(getCustomersList(customers));
