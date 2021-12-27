// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.
(a, b) => a + b;
// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3); //13

//xp gold
// Exercise 1 : Landscape
// 1.Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// 2.Change the code below to nested arrow functions.

let landscape = function () {
  let result = "";

  let flat = function (x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = function (x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
    console.log(result);
  };

  flat(4);
  mountain(4);
  flat(4);
  console.log(result);
  return result;
};

landscape();

//1. ____/''''\____ // the result variable is accesible throughout the process, being reassigned and added values through nested functions and loops, thanks to lexical scope and the use of the let variable.
//2.
let landscape = () => {
  let result = "";
  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };
  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
    console.log(result);
  };
  flat(4);
  mountain(4);
  flat(4);
  console.log(result);
  return result;
};
