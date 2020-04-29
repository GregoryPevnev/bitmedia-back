const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

const dateFrom = date => new Date(date);

const isDate = date => DATE_FORMAT.test(date) && !Number.isNaN(dateFrom(date).getTime());

const isRange = (startDate, endDate) => dateFrom(startDate).getTime() < dateFrom(endDate).getTime();

exports.validateDates = (startDate, endDate) => {
  const errors = [];

  if (!isDate(startDate)) errors.push("Invalid starting date");
  if (!isDate(endDate)) errors.push("Invalid ending date");

  if (!isRange(startDate, endDate)) errors.push("Invalid range of dates");

  return errors;
};