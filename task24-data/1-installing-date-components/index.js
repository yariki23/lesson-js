const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return week[new Date(dateInFuture).getDay()];
}
console.log(dayOfWeek(new Date(), 1));
