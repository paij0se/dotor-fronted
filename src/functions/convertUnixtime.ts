function unixTimeToDate(time: number) {
  const date: Date = new Date(time * 1000);
  return date.toLocaleString();
}

export default unixTimeToDate;
