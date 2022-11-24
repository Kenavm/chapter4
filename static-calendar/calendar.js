const calendar = genCalendar(2022);
console.log(calendar);
const body = document.getElementsByTagName("body");

function renderApp() {
  const element = document.createElement("div");
  return element;
}

const app = renderApp();
document.body.appendChild(app);

let weekdays = [
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
  ];

function main() {
  let calendarDiv = createCalendar();
  getMonthsElements(calendarDiv);
  createDropdown();
}

function createDropdown() {
    let dropdownDiv = document.createElement('div');
    let dropdown = `<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown link
    </a>
  
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>`

  dropdownDiv.innerHTML = dropdown;
  body[0].append(dropdownDiv);
}

function createCalendar() {
  let calendarDiv = document.createElement("div");
  calendarDiv.classList.add("calendar");
  let h1 = document.createElement("h1");
  h1.classList.add("year-title");
  h1.textContent = "Year 2022";
  calendarDiv.append(h1);
  body[0].append(calendarDiv);

  return calendarDiv;
}

function getMonthsElements(calendarDiv) {
  let monthsDiv = document.createElement("div");
  monthsDiv.classList.add("months");

  for (const month in calendar.months) {
    let calendarMonth = calendar.months[month].name;
    monthsDiv.append(createMonths(calendarMonth));
  }

  calendarDiv.append(monthsDiv);

  body[0].append(calendarDiv);

  return calendarDiv;
}

function addDays(maxDays, indexOfStartDay) {
  let daysDiv = document.createElement("div");
  let counter = 1;
  maxDays = maxDays + indexOfStartDay - 1;
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

function createMonths(calendarMonth) {
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
  let indexOfCalendarMonth = getIndexOfCalendarMonth(calendarMonth);

  maxDays = calendar.months[indexOfCalendarMonth].totalDays;
  startDay = calendar.months[indexOfCalendarMonth].firstDay;
  indexOfStartDay = getIndexOfDay(startDay);
  monthDiv.append(addDays(maxDays, indexOfStartDay));

  return monthDiv;
}

function getIndexOfCalendarMonth(calendarMonth) {
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
  let indexOfStartDay = weekdays.indexOf(startDay);
  return indexOfStartDay + 1;
}

main();
