// const items = ["edward", "sharpe", "and", "the", "magnetic", "zeros"];

// items.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
// });
// console.log(items);
// ## Exercise1
// Pass this object as an argument of the getDetails function.
// Destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)

function getDetails({ name, house, goodstudent }) {
  console.log(name, house, goodstudent);
}

getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

// ## Exercise2
// Pass this object
// {name: 'Hermione Granger',
//  house: 'Gryfindor',
//  friend :  {
// 	friendName : 'Harry Potter',
// 	age : 20
// 	}
// }
// as an argument of the getMoreDetails function.
// Destructure the object in the parameter (ie. you should have 4 parameters : name, house , goodstudents, friendName and age)

function getMoreDetails({ name, house, friend: { friendName, age } }) {
  console.log(name, house, friendName, age);
}

getMoreDetails({
  name: "Hermione Granger",
  house: "Gryfindor",
  friend: {
    friendName: "Harry Potter",
    age: 20,
  },
});

// ## Exercise3
const elonPerson = {
  first: "Elon",
  last: "Musk",
  housesLocation: ["new york", "paris"],
  twitter: "@elonmusk",
  company: "Space X",
  houses: {
    amount: 2,
    value: "5Million",
  },
};

// as an argument of the getElonMuskDetails function.
// Destructure the object in the parameter and console.log
// - his first name, last name, the 2 cities where he owns an appartment, and the value of the houses

function getElonMuskDetails({
  first,
  last,
  housesLocation: [fCity, sCity],
  houses: { value },
}) {
  console.log(first, last, fCity, sCity, value);
}

getElonMuskDetails(elonPerson);

// Exercise
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. The methods, when called, will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV, console.log the brand of the TV and call the methods increase and decrease volume

function TV(brand, channel = 1, volume = 50) {
  this.brand = brand;
  this.channel = channel;
  this.volume = volume;
  this.volumeChange = function () {
    volume > 0 ? volume + 1 : volume - 1;
  };
}

let lgTv = new TV("lg", 5, 12);
console.log(lgTv);
