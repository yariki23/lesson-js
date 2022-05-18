function shmoment(data) {
  let result = new Date(data);
  const timeCalculator = {
    add(valueTime, number) {
      if (valueTime === "years")
        result.setFullYear(result.getFullYear() + number);
      if (valueTime === "months") result.setMonth(result.getMonth() + number);
      if (valueTime === "days") result.setDate(result.getDate() + number);
      if (valueTime === "hours") result.setHours(result.getHours() + number);
      if (valueTime === "minutes")
        result.setMinutes(result.getMinutes() + number);
      if (valueTime === "seconds")
        result.setSeconds(result.getSeconds() + number);
      if (valueTime === "milliseconds")
        result.setMilliseconds(result.getMilliseconds() + number);

      return this;
    },
    subtract(valueTime, number) {
      if (valueTime === "years")
        result.setFullYear(result.getFullYear() - number);
      if (valueTime === "months") result.setMonth(result.getMonth() - number);
      if (valueTime === "days") result.setDate(result.getDate() - number);
      if (valueTime === "hours") result.setHours(result.getHours() - number);
      if (valueTime === "minutes")
        result.setMinutes(result.getMinutes() - number);
      if (valueTime === "seconds")
        result.setSeconds(result.getSeconds() - number);
      if (valueTime === "milliseconds")
        result.setMilliseconds(result.getMilliseconds() - number);

      return this;
    },
    result() {
      return result;
    },
  };

  return timeCalculator;
}

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add("minutes", 2)
  .add("days", 8)
  .subtract("years", 1)
  .result();
console.log(result);
