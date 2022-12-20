/* eslint-disable max-classes-per-file */

export class User {
  //in: ...string
  //return:undef
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  //in: undefined
  //return: string
  get id() {
    return this._id;
  }
  //in: undefined
  //return: string
  get name() {
    return this._name;
  }
  //in: undefined
  //return: string
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  //in: array
  //return: undefined
  constructor(users) {
    this._users = users;
  }
  //in: undefined
  //return: array
  get users() {
    return Object.freeze(this._users);
  }
  //in: undefined
  //return: array
  getUserNames() {
    return this.users.map((user) => user.name);
  }
  //in:undefined
  //return: array
  getUserIds() {
    return this.users.map((user) => user.id);
  }
  //in: string
  //return: string
  getUserNameById(elemId) {
    return this.users.find((user) => user.id === elemId).name;
  }
}

// examples
const user = new User("1", "Tom", "session-id");

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
