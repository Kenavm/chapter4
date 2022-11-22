import {
    isPanelOn,
    formatTemperatureValue,
} from "./panel.js";

const setTemperatureElement = document.querySelector(
    "#set-temperature-num",
);
const roomTemperatureElement = document.querySelector(
    "#temperature-num",
);

/**
 * Correct the room temperature according to the set temperature
 * by calling the decreaseTemperature() or increaseTemperature() function.
 * If the temperature equals the setting, write a message to the console.
 *
 * @param {number} roomTemperature - the current temperature of the room
 * @param {number} setTemperature - the current setting for the thermostat
 *
 * @returns {number} the corrected room temperature.
 */
function changeTemperature(
    roomTemperature,
    setTemperature,
) {
    // TODO - increase or decrease the room temperature in the room?
}

/**
 * Increase the room temperature with 0.5.
 * @param {number} roomTemperature - the current room temperature, which this function increases.
 * @returns {number} The correctly set value for roomTemperature.
 */
function increaseTemperature(roomTemperature) {
    console.log("Temperature is increased by 0.5 °C");
    // TODO - what should this function return ?
}

/**
 * Decrease the room temperature with 0.5.
 * @param {number} roomTemperature - the current room temperature, which this function decreases.
 * @returns {number} The correctly set value for roomTemperature.
 */
function decreaseTemperature(roomTemperature) {
    console.log("Room temperature equals the set value.");
    // TODO - what should this function return ?
}

/**
 * Change the set temperature based on the clicked button
 * by calling the increaseSetTemperature or the decreaseSetTemperature based on the value of isIncrease.
 *
 * @param {boolean} isIncrease - helps to decide whether to increase, or decrease the set temperature.
 */
export function changeSetTemperature(isIncrease) {
    if (isPanelOn()) {
        let setTemperature;
        const currentTemperature = parseFloat(
            setTemperatureElement.innerText,
        );

        // TODO - increase or decrease the temperature setting?

        setTemperatureElement.innerText =
            formatTemperatureValue(setTemperature);
    } else {
        console.error("Panel is turned off, sorry!");
    }
}

/**
 * Increase the set temperature with 0.5.
 * @param {number} setTemperature - the temperature setting, which this function increases.
 * @returns {number} The correctly set value for setTemperature.
 */
function increaseSetTemperature(setTemperature) {
    console.log("Temperature is set higher by 0.5 °C");
    // TODO - what should this functios return?
}

/**
 * Decrease the set temperature with 0.5.
 * @param {number} setTemperature - the temperature setting, which this function decreases.
 * @returns {number} The correctly set value for setTemperature.
 */
function decreaseSetTemperature(setTemperature) {
    console.log("Temperature is set lower by 0.5 °C");
    // TODO - what should this function return ?
}

/**
 * Handles changes in room temperature according to the set temperature at stated intervals.
 * Works only, if the device is on.
 */
export function handleRoomTemperatureChange() {
    if (isPanelOn()) {
        let roomTemperature = parseFloat(
            roomTemperatureElement.innerText,
        );
        let setTemperature = parseFloat(
            setTemperatureElement.innerText,
        );

        let changedTemperature = changeTemperature(
            roomTemperature,
            setTemperature,
        );
        roomTemperatureElement.innerText =
            formatTemperatureValue(changedTemperature);
    }
}
