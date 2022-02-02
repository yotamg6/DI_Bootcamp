//lesson exe1.
let fruits = ["apple", "banana", "pear", "melon"];
for (let i = 0; i <= fruits.length - 1; i++) {
  fruits[i] += "s";
}
console.log(fruits);

// -> the result
// let fruits = ["apples", "bananas", "pears", "melons"];

//lesson exe2.
let users = [
  {
    username: "John",
    lastName: "Smith",
  },
  {
    username: "Tom",
    lastName: "Smith",
  },
  {
    username: "Lea",
    lastName: "Smith",
  },
];

//1. console.log the username of each user
for (let obj of users) {
  console.log(obj.username);
}
//exe 1.
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) console.log(`${i} is even`);
  else console.log(`${i} is odd`);
}

//exe. 2
// 1.Write a JavaScript for loop that will go through the variable names.
// if the item is not a string, pass.
// if the item is a string, check if it's first letter is in uppercase. If not, change it to uppercase and then display the name.
// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.
let names = ["john", "sarah", 23, "Rudolf", 34];
for (let element of names) {
  if (typeof element !== "string") continue;
  console.log(element[0].toUpperCase() + element.slice(1));
}
for (let element of names) {
  if (typeof element !== "string") {
    break;
  }
  console.log(element);
}
