'use strict';

const getCustomersList = obj => {
  const arrUsers = Object.entries(obj);
  return arrUsers.map(val => (val[1].id = val[0]));
};

//data test
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));
