export const fetchUserData = async (userName) => {
  const response = fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to load data");
};

// .then(
//   (response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Failed to load data");
//   }
// );
// };
