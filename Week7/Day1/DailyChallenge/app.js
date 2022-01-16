// Part I:
// Create a file named main.js that contains a variable
// Use the exported module in a script.js file.

const number = require("./main");
const date = require("./main");
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const b = 5;
console.log(number.largeNumber + b);
// part II
// Create a file named main.js and create a function that returns the current date and time. Export the module.

console.log(`The date and time are currently ${date.currentTime}`);
// Use the exported module in a script.js file.

// Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.
