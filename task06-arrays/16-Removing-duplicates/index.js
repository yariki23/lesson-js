function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let individualNumbers = new Set(array);
  return [...individualNumbers];
}
