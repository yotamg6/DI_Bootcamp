// //1st exercise
// //You need to guess what will be console logged, and explain why

// let username = "John";

// function checkName() {
//   console.log("In the function", username); //john. the global scope is the closest
//   username += "Smith";
//   console.log("Still in the function", username); //john smith. the closest username is inside the function, and it's reassigned
// }

// console.log("before the function", username); //john, it's in the global scope

// checkName();

// console.log("after the function", username); //john smith, the variable is reassigned inside the function

// //2ns exercise
// //You need to guess what will be console logged, and explain why

// let username = "John";

// function checkName() {
//   let username = "tom";
//   console.log("In the function", username); //tom. referring to the closest var declared assigned with the value tom
//   username += "Smith";
//   console.log("Still in the function", username); //tom smith. reassigned inside the function
// }

// console.log("before the function", username); //john. the global var

// checkName();

// console.log("after the function", username); //john. the global var

//Display in the body the name, email and phone of every employee
const employees = [
  { name: "Anne", email: "Anna@example.com", phone: "0000–000–0000" },
  { name: "Tom", email: "Tom@gmail.com", phone: "0111–111–1111" },
];

for (let employee of employees) {
  const { name, email, phone } = employee;
  document.body.textContent += `${name}${email}${phone}`;
}

//Exercise on functions
// 1. Greet the user (ie. using an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

function greetUser(userName) {
  console.log(`hello ${userName}`);
}
greetUser("joe");

const greetUserExp = function (userName) {
  console.log(`hello ${userName}`);
};
greetUserExp("joe");

const greetArrow = (user) => console.log(`hello ${user}`);
greetArrow("joe");

//Exercise Using this
let classmates = ["Josh", "Lily", "Sophie", "Mark"];
classmates.forEach((elem, index, array) =>
  elem == "Sophie" ? (array[index] += "&") : (array[index] += "!")
);
console.log(classmates);
// Use for each and arrow function, to add a & after Sophie and a ! after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Try to use tenary operator
