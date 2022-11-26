function main() {
    createHTMLElements();
}

main();

function formatDate(date) {
    let humanReadableDate = "";
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear();
  
    humanReadableDate += isDateTwoDigits(date.getDate())
      ? day + "."
      : day.padStart(2, "0") + ".";
    humanReadableDate += isDateTwoDigits(date.getMonth() + 1)
      ? month + "."
      : month.padStart(2, "0") + ".";
    humanReadableDate += year;
  
    return humanReadableDate;
  }
  
  function isDateTwoDigits(date) {
    if (date <= 9) {
      return false;
    } else return true;
  }
  //TODO: singular und plural 
  function getCountdownTime(date) {
    let countdown = "";
    let currentDate = new Date();
    let difference = date.getTime() - currentDate.getTime();
  
    let seconds = parseInt(difference / 1000);
    let minutes = parseInt(seconds / 60);
    let hours = parseInt(minutes / 60);
    let days = parseInt(hours / 24);
    let months = parseInt(days / 30);
    seconds -= minutes * 60;
    minutes -= hours * 60;
    hours -= days * 24;
    days -= months * 30;
    
    countdown += (months>1) ? months + " months, ":months + " month, ";
    countdown += (days>1) ? days + " days, ":days + " day, ";
    countdown += (hours>1) ? hours + " hour, ":days + " hours, ";
    countdown += (minutes>1) ? minutes + " minutes, ":minutes + " minute, ";
    countdown += (seconds>1) ? seconds + " seconds, ":seconds + " second, ";
  
    return countdown;
  }
  
  function getDays(year, month) {
    return new Date(year, month, 0).getDate();
  }
  
  function createHTMLElements() {
    let holidayContainer = document.getElementById("holidays");
    holidayContainer.classList.add("holiday");
  
    for (const holiday of HOLIDAYS) {
      createHolidayElements(holiday, holidayContainer);
    }
  }
  
  function createHolidayElements(holiday, holidayContainer) {

    let holidayName = document.createElement("div");
    holidayName = holiday.name;
  
    let heading = document.createElement("h2");
    heading.textContent = holidayName.replace(/-/g, " ");
  
    let date = document.createElement("div");
    date.classList.add("date");
    date.textContent = formatDate(holiday.date);
  
    let countdown = document.createElement("div");
    countdown.classList.add("countdown");
  
    setInterval(function () {
      countdown.textContent = getCountdownTime(holiday.date);
    }, 500);
    holidayContainer.appendChild(heading);
    holidayContainer.appendChild(date);
    holidayContainer.appendChild(countdown);

   
  }

  /*
  <!-- EXAMPLE HOLIDAY ELEMENT -->
  <!-- <div class="holiday"> -->
  <!--     <div class="name">Christmas</div> -->
  <!--     <div class="date">24.12.2022</div> -->
  <!--     <div class="countdown"> -->
  <!--         2 months, 11 days, 10 hours, 21 minutes, and 16 seconds -->
  <!--     </div> -->
  <!-- </div> -->
  */