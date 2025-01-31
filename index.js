/**
Problem Statement:
Given a distance in miles, determine the most suitable mode of transport. The function should follow these guidelines:

If the distances greater than 0 and up to 0.5 miles, walking is recommended.
For distances greater than 0.5 miles and up to 5 miles, a bicycle is recommended.
For distances greater than 5 miles and up to 50 miles, a car is recommended.
For distances greater than 50 miles, taking a plane or train is recommended.


 * USE SWITCH/CASE to return the recommended mode of transport based on the distance to be traveled in miles based on distances given above.

 * STRETCH GOAL: Use process.argv to allow the user to pass in a distance in miles as a command line argument.
 * SUPER STRETCH GOAL: Write a jest test that tests for 50 mile or greater input
 *
 *
 * @param {number} distance - The distance in miles.
 * @returns {string} - The recommended mode of transport.
 */

function getTransportMode(distance) {
    // distance = process.argv[2] ? process.argv[2] : distance
    switch (true) {
        case(distance < 0):
            return "Distance cannot be negative.";
        case (distance <= 0.5):
            return "Walking";
        case (distance <= 5):
            return "Bicycle";
        case (distance <= 50):
            return "Car";
        case (distance > 50):
            return "Plane or Train";
        default:
            return "Please enter a valid number";
    }
}

// run node index.js <distance>
console.log(getTransportMode(process.argv[2]));

module.exports = { getTransportMode };
