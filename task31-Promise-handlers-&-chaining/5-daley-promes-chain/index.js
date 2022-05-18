function delay(number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(number);
    }, number)
  );
}

delay(3000).then(() => console.log("Done"));
