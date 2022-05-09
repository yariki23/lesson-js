function getDiff(startDate, endDate) {
  let ms = startDate - endDate;
  if (ms <= 0) {
    ms *= -1;
  }
  let days, hours, min, sec;
  sec = Math.floor(ms / 1000);
  min = Math.floor(sec / 60);
  sec = sec % 60;
  hours = Math.floor(min / 60);
  min = min % 60;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  return `${days}d ${hours}h ${min}m ${sec}s`;
}

console.log(
  getDiff(new Date(1996, 1, 23, 4, 24, 42), new Date(1997, 1, 23, 11, 2, 1))
);
