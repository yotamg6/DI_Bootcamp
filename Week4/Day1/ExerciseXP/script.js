// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// // #1
// function q1() {
//   var a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   //   alert(a); //3
// }

// //#2
// var a = 0;
// function q2() {
//   a = 5;
// }

// function q22() {
//   alert(a); //a will be equal to 5
// }

// //#3
// function q3() {
//   window.a = "hello";
// }

// function q32() {
//   alert(a); //a will be equal to undefined
// }

// //#4
// var a = 1;
// function q4() {
//   var a = "test";
//   alert(a); //test
// }

// //#5
// var a = 2;
// if (true) {
//   var a = 5;
//   alert(a); //5
// }
// alert(a); //2

// Exercise 2 : Ternary Operator

function winBattle() {
  return true;
}

function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}
experiencePoints();

// You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).
const experiencePointsOper = winBattle ? 10 : 1;

// Exercise 3 : Colors

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// 1.Check if this array includes the color “Violet”.
// 2.Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.
const isViolet = colors.includes("Violet");

colors.forEach((color, index) =>
  console.log(`${index + 1}# choice is ${color}`)
);

// Exercise 4 : Colors #2

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.
const [d, a, b, c] = ordinal;
let newArr = [];
newArr = [a, b, c, d];

color.forEach((col, i) => {
  newArr.push(d);
  console.log(`${i + 1}${newArr[i]} choice is ${col}`);
});
// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.

const isString = (input) => (typeof input == "string" ? true : false);

console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// 1. Create a global variable called bankAmount which value is the amount of money currently in your account.
// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// 3. Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// 4. Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// 5. Display your current bankAccount standing at the end of the month.
let sum = 0;
let bankAmount = 1000;
let taxedEle;
const vatPerc = 1.17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

function getTotalAmount(ele) {
  let numElem = Number(ele);
  numElem < 0 ? (numElem *= vatPerc) : numElem;
  sum += numElem;
}

expenses.forEach(getTotalAmount);
bankAmount += sum;
console.log(bankAmount);
