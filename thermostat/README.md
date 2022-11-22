# Thermostat
[Journey Project](https://journey.code.cool/v2/learn/courses/952/modules/7552/units/9/SOLO/27802)  

Setting a proper temperature in our indoor living spaces can
drastically improve our carbon footage by not spending unnecessary
resources. Your task is here to implement the logic behind the
settings of a thermostat. Let's take our part in saving the Earth!

## Tasks
### Change temperature
First, we need to simulate the functionality of a thermostat -
it should adjust the temperature based on the user's temperature setting.  
Implement the `changeTemperature` function in `thermostat.js`.
1. The temperature __increasing__ function is called when the room temperature is lower than the setting.
2. The temperature __decreasing__ functions is called when the room temperature is higher than the setting.
3. When the room temperature equals the setting, the following message is written to the console: `"Room temperature equals the set value."`

### Increase temperature
Implement the `increaseTemperature` function in `thermostat.js`.
This function should return the room temperature value __incremented__ by `0.5`.
1. The temperature variable is increased by `0.5`.
2. The function returns the increased temperature value.

### Decrease temperature
Implement the `decreaseTemperature` function in `thermostat.js`.
This function should return the room temperature value __decremented__ by `0.5`.
1. Temperature variable is decremented by `0.5`.
2. The function returns the decremented temperature value.

### Change temperature setting
Implement the `changeSetTemperature` function in `thermostat.js`.
This function should call the functions responsible for
increasing or decreasing the setting, based on the function parameter.
1. If the user pressed the increasing button, the `increaseSetTemperature`
   function is called with the current temperature as parameter.
2. If the user pressed the decreasing button, the `decreaseSetTemperature`
   function is called with the current temperature as parameter.

### Increase temperature setting
Implement the `increaseSetTemperature` function in `thermostat.js`.
This function should return the temperature setting value __incremented__ by `0.5`.
1. The temperature setting variable is increased by `0.5`.
2. The function returns the increased value of the setting.

### Decrease temperature setting
Implement the `decreaseSetTemperature` function in `thermostat.js`.
This function should return the temperature setting value __decremented__ by `0.5`.
1. The temperature setting variable is decremented by `0.5`.
2. The function returns the decremented value of the setting.

## Hints
- We already started this project for you, so you only need to focus
  on implementing functions described in the tasks.
  You can find more files in the repository, but you should
  only modify the `thermostat.js` file.
- Check the `// TODO` blocks - you should write your solutions there.
- This project is meant to be used in the browser.
  Start it by launching a static file server, like `live-server` within VSCode.
- You can find relevant information in the JSDoc
  (inside blocks marked with `/** */`) about the suggested behaviour of a function.

## Background Materials
* [JavaScript Functions](https://javascript.info/function-basics)
* [JavaScript Functions by Codecool](https://journey.code.cool/v2/learn/materials/competencies/javascript-basics/javascript-functions.md)
* [JavaScript Control Structures by Codecool](https://journey.code.cool/v2/learn/materials/competencies/javascript-basics/javascript-control-structures.md)
