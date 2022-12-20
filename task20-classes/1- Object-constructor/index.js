/*
algo
1. create class 
2.use method sayHi
3.use method requstNewPhoto
4.
*/

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    } else if (age < 0) {
      return false;
    }
    this.age = age;
    return age;
  }
  static createEmpty() {
    return {
      name: "",
      age: null,
    };
  }
}
