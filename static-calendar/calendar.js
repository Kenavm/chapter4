const body = document.getElementsByTagName("body");

function renderApp() {
  const element = document.createElement("div");
  return element;
}

const app = renderApp();
document.body.appendChild(app);

let weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

let dropdownDiv = document.createElement("div");
let dropdown = `<label for="cars">Year</label>

  <select name="years" id="years">
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    <option value="2025">2025</option>
  
  </select>`;

dropdownDiv.innerHTML = dropdown;
dropdownDiv.children[1].addEventListener("change", changeYear);

body[0].append(dropdownDiv);

function main(calendarYear) {
  const calendar = genCalendar(calendarYear);
  let calendarDiv = createCalendar(calendar);
  getMonthsElements(calendarDiv, calendar);
}

function createCalendar(calendar) {
  let calendarDiv = document.createElement("div");
  calendarDiv.classList.add("calendar");
  let h1 = document.createElement("h1");
  h1.classList.add("year-title");
  console.log(calendar);
  h1.textContent = `Year ${calendar.year}`;
  calendarDiv.append(h1);
  body[0].append(calendarDiv);

  return calendarDiv;
}

function changeYear() {
  let year = document.getElementById("years").value;
  let calendar = document.getElementsByClassName("calendar");

  calendar[0].remove();
  function renderApp() {
    const element = document.createElement("div");
    return element;
  }

  const app = renderApp();
  document.body.appendChild(app);
  main(year);
}

function getMonthsElements(calendarDiv, calendar) {
  let monthsDiv = document.createElement("div");
  monthsDiv.classList.add("months");

  for (const month in calendar.months) {
    let calendarMonth = calendar.months[month].name;
    monthsDiv.append(createMonths(calendarMonth, calendar));
  }

  calendarDiv.append(monthsDiv);

  body[0].append(calendarDiv);

  return calendarDiv;
}

function addDays(maxDays, indexOfStartDay) {
  let daysDiv = document.createElement("div");
  let counter = 1;

  maxDays = maxDays + indexOfStartDay;
  for (let i = 1; i <= maxDays; i++) {
    daysDiv.classList.add("days");
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    if (i >= indexOfStartDay) {
      let dayBeforeTheTenth = counter.toString().padStart(2, "0");
      let dayAfterTheTenth = counter.toString();
      counter < 10
        ? (dayDiv.textContent = dayBeforeTheTenth)
        : (dayDiv.textContent = dayAfterTheTenth);
      counter++;
    }

    daysDiv.append(dayDiv);
  }
  return daysDiv;
}

function createMonths(calendarMonth, calendar) {
  let monthDiv = document.createElement("div");
  monthDiv.classList.add("month");
  let h2 = document.createElement("h2");
  h2.classList.add("month-title");
  h2.textContent = calendarMonth;
  monthDiv.append(h2);
  monthDiv.append(getWeekDays());
  let maxDays;
  let startDay;
  let indexOfStartDay;
  let indexOfCalendarMonth = getIndexOfCalendarMonth(calendarMonth, calendar);

  maxDays = calendar.months[indexOfCalendarMonth].totalDays;
  startDay = calendar.months[indexOfCalendarMonth].firstDay;
  indexOfStartDay = getIndexOfDay(startDay);
  monthDiv.append(addDays(maxDays, indexOfStartDay));

  return monthDiv;
}

function getIndexOfCalendarMonth(calendarMonth, calendar) {
  const index = calendar.months.findIndex((month) => {
    return month.name === calendarMonth;
  });
  return index;
}

function getWeekDays() {
  let monthsDaysHeader = document.createElement("div");
  monthsDaysHeader.classList.add("month-days-header");
  for (const weekday of weekdays) {
    let weekDiv = document.createElement("div");
    weekDiv.textContent = weekday;
    monthsDaysHeader.append(weekDiv);
  }
  return monthsDaysHeader;
}

function getIndexOfDay(startDay) {
  startDay = startDay.slice(0, 2);
  let indexOfStartDay = weekdays.indexOf(startDay);
  return indexOfStartDay + 1;
}

main(2022);
