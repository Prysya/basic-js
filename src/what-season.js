/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  try {
    const newDate = date.valueOf();

    if (newDate && date instanceof Date) {
      const month = date.getMonth();
      if (typeof month === "number") {
        switch (month) {
          case 2:
          case 3:
          case 4:
            return "spring";
          case 5:
          case 6:
          case 7:
            return "summer";
          case 8:
          case 9:
          case 10:
            return "fall";
          case 11:
          case 0:
          case 1:
          default:
            return "winter";
        }
      }
    }

    throw new Error("");
  } catch (err) {
    err.message = "Invalid date!";
    throw err;
  }
}
