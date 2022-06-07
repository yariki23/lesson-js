"use strict";

/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = async (users) => {
  const promiseBlog = Promise.all(
    users.map((user) => {
      return fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          return response.json();
        })
        .then((user) => user.blog);
    })
  );
  return promiseBlog;
};

// examples "reactjs"
// getUsersBlogs(["google", "facebook"]).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
