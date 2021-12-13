//exe 1.
// 1.Create 2 variables, x and y. Each of them should have a different numeric value.
// 2.Write an if/else statement that checks which number is bigger.

const x = 10;
const y = 20;

if (x < y) console.log("x is smaller than y");
else console.log("x is bigger than y");

//exe 2.
// 1.Create a variable called newDog where it’s value is “Chihuahua”.
// 2.Check and display how many letters are in newDog.
// 3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// 4.Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

const newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua")
  console.log("I love Chihuahuas, it’s my favorite dog breed");
else console.log("I dont care, I prefer cats");

//exe.3
// 1. Prompt the user for a number and save it to a variable.
// 2. Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

const userPrompt = prompt("how many siblings you have");
if (userPrompt % 2 === 0) console.log(`${userPrompt} is an even number`);
else console.log(`${userPrompt} is an odd number`);

//exe 4.
// Below is an array of users that are online in a group chat.
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length === 0) console.log("no one is online");
else if (users.length === 1) console.log(`${users[0]} is online`);
else if (users.length === 2)
  console.log(`${users[0]} and ${users[1]} are online`);
else
  console.log(
    `${users[0]} and ${users[1]} and ${users.length - 2} more are online`
  );
