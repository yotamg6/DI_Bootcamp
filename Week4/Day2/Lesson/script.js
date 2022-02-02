// // Guess what will be the value of the 2 console.logs
// function setObj(person) {
//   person.age = 25;
//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? let personObj1 = {
// //  name: 'Alex',
// //     age: 25
// // };
// console.log(personObj2); // -> ? 25

// // ## Exercise 2
// // Guess what will be the value of the 2 console.logs
// function setObj(person) {
//   person = {
//     name: "John",
//     age: 50,
//   };

//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? let personObj1 = {
// // name: 'John',
// // age: 30
// // };
// console.log(personObj2); // -> ? person = {
// // name: 'John',
// // age: 50
// // };

// Exercise Self Invoking Function
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

// (function (userName) {
//   let container = document.querySelector("#container");
//   container.textContent = userName;
// })("Max");

// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` that should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens? (edited)

// function starWars() {
//   let characters = [];
//   function createCharacter(firsName, lastName = "Smith") {
//     characters.push(lastName);
//   }
//   function displayCharacter() {
//     const [deconstructed] = characters;
//     const text = document.createTextNode(deconstructed);
//     document.appendChild(text);
//   }
//   createCharacter("Luck", "Skywalker");
//   createCharacter();
//   createCharacter();
//   displayCharacter();
// }
// starWars();
