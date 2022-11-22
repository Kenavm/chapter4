/**
 * Given a year number argument, this function generates a calendar object.
 * The calendar has an array of months.
 * Each month contains its first day of the week,
 * and how many days there are in total in the month.
 *
 * The structure looks like this:
 *     {
 *         year: 2022,
 *         months: [
 *             {
 *                 name: "January",
 *                 firstDay: "Saturday",
 *                 totalDays: 31
 *             },
 *             // ... other months ...
 *         ]
 *     }
 *
 *
 * @param {number} year
 * @returns {Calendar}
 */
function genCalendar(year) {
    function getSemanticMonthFor(month) {
        return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "Novemeber",
            "December",
        ][month];
    }

    function getSemanticDayOfWeekFor(day) {
        return [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ][day];
    }

    /** @type {Calendar} */
    const calendar = { year, months: [] };

    for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
        const date = new Date(`${year}-${monthIdx + 1}-01`);

        const name = getSemanticMonthFor(monthIdx);

        // const dayOffset = mod(date.getDay() - 1, 12);
        const firstDay = getSemanticDayOfWeekFor(
            date.getDay(),
        );

        date.setMonth(monthIdx + 1);
        date.setDate(0);
        const totalDays = date.getDate();

        /** @type {Month} */
        const month = {
            name,
            firstDay,
            totalDays,
        };
        calendar.months.push(month);
    }

    return calendar;
}

/**
 * @typedef {object} Calendar
 * @property {number} year
 * @property {Month[]} months
 */

/**
 * @typedef {object} Month
 * @property {string} name
 * @property {number} firstDay
 * @property {number} totalDays
 */
