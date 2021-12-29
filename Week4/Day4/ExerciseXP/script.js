// Exercise 1 : Location

// Analyze the code below. What will be the output?
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
); // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info

// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'})
// output : 'Your full name is Elie Schoppik'`

function displayStudentInfo(studentObject) {
  console.log(`Your full name is ${studentObject.first} ${studentObject.last}
    `);
}
displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3: User & Id
// Instructions
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

let arrUsers = Object.entries(users);
console.log(arrUsers);
let newArr = [];

for (let [user, id] of arrUsers) {
  newArr.push([user, id * 2]);
}
console.log(newArr);

// Exercise 4 : Person Class

// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member); //object. instances in JS are objects containing data and behavior described by the class.

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
}
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size; // THIS ONE. to use the parent's property it calls the parent constructor method, adding the size parameter and the property this.size.
//   }
// };

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

console.log({} === {}); //false. when using the comparison operator on objects, it checks if both objects have the same refrence on the call stack. since they are not declared they don't have a refrence at all. the operator does not check the content of objects.
console.log([2] === [2]); //false. arrays are objects

// What is, for each object below, the value of the property number ?

const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5 }; //5
object1.number = 4; //4
