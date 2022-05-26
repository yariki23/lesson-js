function parseUser(strJSON) {
  try {
    return JSON.parse(strJSON);
  } catch (error) {
    return null;
  }
}
console.log(parseUser('{"user": "ya"'));
