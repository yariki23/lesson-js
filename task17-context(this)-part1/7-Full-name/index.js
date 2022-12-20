//put your code here
/*
algo
1. create object user
2.create method obj getFullName and this method return firstName + lastName
3.create method obj setFullName and this must save separately firstName and 
lastName
*/

export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  setFullName: function (fullName) {
    const sortName = fullName.split(" ");
    this.firstName = sortName[0];
    this.lastName = sortName[1];
  },
};
