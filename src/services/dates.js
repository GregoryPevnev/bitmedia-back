const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/

const isDate = date => DATE_FORMAT.test(date) && !Number.isNaN(date.getTime());

const isRange = (startDate, endDate) => startDate.getTime() < endDate.getTime();

exports.validateDates = (start, end) => {
  const errors = [];

  const startDate = new Date(start), endDate = new Date(end);

  if (!isDate(startDate)) errors.push("Invalid starting date");
  if (!isDate(endDate)) errors.push("Invalid ending date");

  if (!isRange(startDate, endDate)) errors.push("Invalid range of dates");

  return errors;
};