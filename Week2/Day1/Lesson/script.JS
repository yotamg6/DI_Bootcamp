console.log("hello");
const userName = "John";
let age = 22;
console.log(userName + " is " + age + " years old");
console.log(`${userName} is ${age} years old`);

//exe 1.
const addressNumber = 13;
const addressStreet = "Herzel";
const country = "Israel";
const globalAddress = `I live at ${addressNumber} ${addressStreet} street, ${country}`;
console.log(globalAddress);

//exe 2.

const birthYear = 1996;
const futureYear = 2026;
const futureAge = futureYear - birthYear;
console.log(`I will be ${futureAge} in the year ${futureYear}`);

//exe 3.
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
// 2. Display dog
// 3. Add to the array pets, the pet horse. Remove the pet rabbit
// 4. Display the array length

const pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[0]);

// pets.push("horse");
// console.log(pets);

pets.splice(3, 3, "cow", "horse");
console.log(pets);

// const noRabbit = [...pets.slice(0, 3), ...pets.slice(4, 6)];
// console.log(noRabbit);
