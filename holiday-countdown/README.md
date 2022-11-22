# Holiday Countdown
Wouldn't it be nice to have an app that shows you
the time until the next holiday?
Well, that's exactly what we're gonna write!  

## What You'll Learn
- `Date`:
    - getting the current date
    - comparing dates
    - formatting date to a human-readable string
- DOM manipulation
- `setInterval`

## Tasks
Write the code for the following tasks into `main.js`.
The given `holidays.js` file exposes the variable
`HOLIDAYS`, which is an array of upcoming holidays,
their names and their dates. You can use this
`HOLIDAYS` variable in `main.js`.

### Format holiday dates
Write a function called `formatDate` which takes a
`date` parameter of type `Date`. It should return
a __human-readable string__ to represent the date.
The returned human-readable string could have the format
`DD.MM.YYYY`, which could look like this:
```
30.01.2022
```
- From the `date` argument, get the numbers for the current:
    - __day of the month__
    - __month__
    - __year__
- These numbers should be concatenated into a formatted, human-readable string.
- Be sure to prepend a `0` to numbers which only have one digit!
    - ex.: `30.1.2022` -> `30.01.2022`
- For now, `console.log` the formatted dates of all holidays.

### Time difference between now and a date
Write a function called `getCountdownTime`, which takes a
`date` parameter of type `Date`. It should calculate the
time difference between __now__ and the given `date` argument.
With this difference, we want to return a formatted string
representing the __countdown__ until this date is reached.
The returned countdown string could look like this:
```
1 month, 20 days, 1 hour, 32 minutes, and 12 seconds
```
- Calculate the difference between __now__ and the given `date` parameter.
- Using the difference, create a human-readable string in the format described above.
- Be sure to only add the `s` letter to the words that have a number greater than `1`!
    - ex.: `1 month` (singular, no `s`), `20 days` (plural, with `s`)
- For now, `console.log` the formatted countdown times of all holidays.

### Create holiday elements
We don't want to just `console.log` these formatted dates and countdowns,
we want to display them on our page!  
For each holiday in `HOLIDAYS` we want to create
some HTML elements for the holiday's __name__,
formatted __date__, and the __countdown__.
- Each holiday should create 3 `div` elements:
    - One with the class `.name`, containing the holiday's __name__.
    - One with `.date`, containing the __human-readable holiday date__, using our `formatDate` function.
    - One with `.countdown`, containing the __human-readable countdown time__, using our `getCountdownTime` function.
- Append these holiday elements to the element with ID `#holidays`.
- Be sure to remove any previous `console.log`s from the previous tasks!

### Update holiday countdowns
Currently our countdowns are only calculated and displayed
when our page first loads. We want to __update__ these countdowns
__every second__, so we get live countdowns for the upcoming holidays!
- Every second, calculate new countdowns for every holiday, using `setInterval`.
- Update the UI of our `.countdown` elements with the newly calculated countdowns for each holiday.

### Sort holiday elements (optional)
It would be nice if our holiday elements would be sorted,
with the next upcoming holidays at the top of the list.
- Before creating our holiday elements, sort our `HOLIDAYS` array
  by calculating each holiday's countdown and comparing them with each other.
- The holidays coming next should be inserted into the `#holidays` element first.

### Add your birthday! (optional)
You can add any holidays you want in the `holidays.js` file!  
- Using the provided `getHolidayFor` function, add your birthday
  (or any significant date) to the `HOLIDAYS` array.
- Add as many as you want, and keep track of these upcoming holidays!

## Hints
- You can __subtract__ a `Date` from another `Date` to get the difference between the dates in milliseconds.
- You can use `new Date(...)` in multiple ways:
    - by passing __1 number parameter__ representing the __milliseconds since 1970__
    - by specifying the __year__, __month__, and __day__ with __3 separate parameters__
- Careful, `date.getMonth()` gives you a __zero-indexed number__,
  so __January__ is represented with the index `0`, and __December__ with `11`.

## Background Materials
- [`setInterval()` examples](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- API docs:
    - [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    - [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/window/setInterval)
