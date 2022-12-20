"use strict";
//put your code here
/*
algo
1.create and export object event
2.method getInvitations must return invitation for 18 age people
3. for arr guest use filter and than method map
func getInvitations
in: array
out: obj
*/

export const event = {
  message: "Welcome to the party!",
  guests: [
    { name: "John", age: 18, email: "example@server.com" },
    { name: "Den", age: 16, email: "example2@server.com" },
    { name: "Ben", age: 20, email: "example3@server.com" },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
