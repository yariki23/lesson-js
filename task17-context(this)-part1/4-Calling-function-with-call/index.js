/* ===> 1 <=== */
const student = {
  name: "Tom",
};

function sayName() {
  console.log(this.name);
}

/*
 */
sayName.call(student);
// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// ... your code here
const student2 = {
  name: "Bruce",
};

sayName.call(student2);
// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// ... your code here

/* ===> 2 <=== */
const company = {
  companyName: "Microsoft",
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

greeting.call(company, "Bob", "Marley");
// вызовите ф-цию greeting так, чтобы в консоль вывелось
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
// ... your code here

/* ===> 3 <=== */
const country = {
  countryName: "Ukraine",
  capital: "Kyiv",
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const population = getPopulation.call(country, 43000);
console.log(population);
// вызовите ф-цию getPopulation так, чтобы она вернула
// 'Population in Ukraine is 43000'
// 43000 передавайте в виде числа
// используйте объект country
// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// ... your code here

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: "sell",
  currency: "USD",
  exchange: "NYSE",
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: "buy",
  currency: "USD",
  exchange: "NASDAQ",
};

transaction.printTransaction.call(anotherTransaction);
// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
// ... your code here
