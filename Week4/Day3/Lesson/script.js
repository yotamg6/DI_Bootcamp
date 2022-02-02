const studentsFootball = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
];
// 1.Create a new array of objects, containing the name, score and isAboveAverage key
// 2.if the students has a score bigger that 50, the key isAboveAverage will be true

// const newArr = studentsFootball.map(
//   (student) =>
//     // studentsFootball;

//     student.name

//   // student.score;
//   // score.isAboveAverage;
// );
// console.log(newArr);

let famousPeople = [
  {
    name: "Angelina Jolie",
    job: "actor",
    age: 80,
  },
  {
    name: "Georges Clooney",
    job: "actor",
    age: 2,
  },
  {
    name: "Paris Hilton",
    job: "actor",
    age: 5,
  },
  {
    name: "Kayne West",
    job: "singer",
    age: 16,
  },
  {
    name: "Britney Spears",
    job: "singer",
    age: 100,
  },
];

const newArr = famousPeople.map((celeb) => celeb.name);
const newObj = famousPeople.map((celeb) => {
  return { name: celeb.name, job: celeb.job };
});

// / 1. Use the map method, to create a new array and push the name of the people

// 2. Use the map method, to create a new array and to push an object in the new array.
// Each object should contain the name of the actor, and it's job
// 3. BONUS: Use for each to add each of thoses names on the DOM (in a paragraph, appended to a div with an id "container")

// ## Exercise 1:  create a new array that filters only the positive value
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

const filtered = numbers.filter((number) => number > 0);
console.log(filtered);

// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.

// Use filter() to filter the array of characters below
const characters = [
  { name: "James T. Kirk", series: ["Star Trek"] },
  { name: "Spock", series: ["Star Trek", "Star Trek: The Next Generation"] },
  { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
  {
    name: "Worf",
    series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
  },
];

const charList = characters
  .filter((char) => char.series.includes("Star Trek: The Next Generation"))
  .map((char) => char.name);
console.log(charList);

// ## Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
const colors = ["blue", "red", "blue", "yellow"];

// ## Exercise 1
const students = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
  { name: "John", score: 75 },
];
// Find the sum of the score of the students using reduce

const sumScore = students.reduce((acc, cur) => cur.score + acc, 0);
console.log(sumScore);
// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Bob", age: 30, voted: true },
];

const howMany = voters.reduce((acc, cur) => (cur.voted ? acc + 1 : acc), 0);
console.log(howMany);

const howMany1 = voters
  .map((voter) => voter.voted)
  .reduce((acc, cur) => (cur ? acc + 1 : acc), 0);

console.log(howMany1);
