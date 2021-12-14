let people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// 1.Write code to remove “Greg” from the people array.
const gregIndex = people.indexOf("Greg");
people.splice(gregIndex, 1);
console.log(people);
// 2.Write code to replace “James” to “Jason”.
const jamesIndex = people.indexOf("James");
people[jamesIndex] = "Jason";
console.log(people);
// 3.Write code to add your name to the end of the people array.
people.push("Yotam");
console.log(people);
// 4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const maryIndex = people.indexOf("Mary");
console.log("index of mary:", maryIndex);
// 5.Write code to make a copy of the people array using the slice method.
const copyPeople = people.slice(maryIndex + 1, people.length);
copyPeople.pop();
console.log(copyPeople);
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

//6.Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("foo")); //-1 means no match found

//7.Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people.length - 1;
console.log("length of array", last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
console.log(people);
for (let elem of people) {
  console.log(elem);
}
for (let elem of people) {
  console.log(elem);
  if (elem === "Jason") break;
}

// Exercise 2 : Your Favorite Colors
// Instructions
// 1.Create an array called colors where the value is a list of your five favorite colors.
// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ["green", "grey", "blue", "white", "red"];
const suffixes = ["1st", "2nd", "3rd", "4th", "5th"];
// let counter = 0;
// for (let color of colors) {
//   for (let suffix of suffixes) {
//     if (counter < 5)
//       console.log(`My ${suffixes[counter]} choice is ${colors[counter]}`);
//     counter++;
//   }
// }
for (let counter = 0; counter < colors.length; counter++) {
  console.log(`My ${suffixes[counter]} choice is ${colors[counter]}`);
}

// Exercise 3 : Repeat The Question
// Instructions
// 1.Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// 2.While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let userNumber = Number(prompt("Choose a number"));
while (userNumber < 10) {
  userNumber = Number(prompt("Choose a number"));
}

// let userNumber = prompt("Choose a number");

// if (typeof userNumber == "number") {
//   while (userNumber < 10) {
//     userNumber = Number(prompt("Choose a number"));
//   }
// } else {
//   alert("error, please type in a number");
//   userNumber = 1;
// }

// if (typeof userNumber == "number")
// let userNumber;
// if (typeof userNumber === "number") {
//   do {
//     userNumber = Number(prompt("Choose a number"));
//   } while (userNumber < 10);
// } else {
//   alert("error, please choose a number");
//   userNumber = 1;
// }

let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// Copy and paste this object to your Javascript file.
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log(
  "number of apt. on 1st floor",
  building.numberOfAptByFloor.firstFloor
);
console.log(
  "number of apt. on 3rd floor",
  building.numberOfAptByFloor.thirdFloor
);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const nameofSecondtenant = building.nameOfTenants[1].toLowerCase();
// const numberOfRoomsSecond =
//   building["numberOfRoomsAndRent"][nameofSecondtenant];
console.log(
  `${nameofSecondtenant} has ${building["numberOfRoomsAndRent"][nameofSecondtenant][0]} rooms in his apartment`
);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] += 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object
const family = {
  brother: "John",
  father: "Eran",
  uncle: "Efraim",
  niece: "Laura",
};
for (let key in family) {
  console.log(`${key}:${family[key]}`);
}

// exe.6
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (let key in details) {
  console.log(`${key} ${details[key]}`);
}

//exe.7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
const emptyArr = [];
for (let name of names) {
  emptyArr.push(name[0]);
}
emptyArr.sort();
const societyName = emptyArr.join("");
console.log(societyName);
