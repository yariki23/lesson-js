function getGreenwichTime(date) {
  const formatter = new Intl.DateTimeFormat("ru", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hours12: false,
  });

  return formatter.format(date);
}

console.log(getGreenwichTime(new Date()));
