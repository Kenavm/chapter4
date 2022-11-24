const calendar = genCalendar(2022);
console.log(calendar);
const body = document.getElementsByTagName("body");

function renderApp() {
  const element = document.createElement("div");
  return element;
}

const app = renderApp();
document.body.appendChild(app);

function main() {
  let calendarDiv = createCalendar();
  calendarDiv = getMonthsElements(calendarDiv);
}

function createCalendar() {
  let calendarDiv = document.createElement("div");
  calendarDiv.classList.add("calender");
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
function addDays(maxDays) {
    let daysDiv = document.createElement('div');
    for (let i = 1; i <= maxDays; i++) {
        
        daysDiv.classList.add("days");
        let dayDiv = document.createElement('div');
        dayDiv.classList.add("day");
        dayDiv.textContent = i.toString();
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

  for (const month in calendar.months) {
    let maxDays = calendar.months[month].totalDays;
    monthDiv.append(addDays(maxDays))
  }

  return monthDiv;
}

function getWeekDays() {
  let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let monthsDaysHeader = document.createElement("div");
  monthsDaysHeader.classList.add("month-days-header");
  for (const weekday of weekdays) {
    let weekDiv = document.createElement("div");
    weekDiv.textContent = weekday;
    monthsDaysHeader.append(weekDiv);
  }
  return monthsDaysHeader;
}

main();
