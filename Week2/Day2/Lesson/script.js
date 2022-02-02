//exe given at the class
// let userCart = {
//   username: "John",
//   password: 1234,
//   isUserSignedIn: true,
//   cart: {
//     apple: 2,
//     banana: 1,
//     pear: 5,
//   },
//   prices: {
//     apple: 0.5,
//     banana: 0.8646466363,
//     pear: 0.2,
//   },
// };
// 1. Add the lastname Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants
// (userCart.lastname = "Smith"), console.log(userCart.lastname);
// userCart.prices.pear *= 1.17;
// console.log(userCart.prices.pear);
// const userSelectedFruit = prompt(
//   "Choose your favorite fruit between Apple, Banana and Pear"
// ).toLowerCase();
// console.log(userSelectedFruit);
// console.log(
//   `the price of ${userSelectedFruit} is ${Math.round(
//     userCart["prices"][userSelectedFruit]
//   )}$`
// );
//2nd class exe
let userCart = {
  username: "Johnny",
  password: 12345,
  isUserSignedIn: true,
  cart: {
    apple: 2,
    banana: 1,
    pear: 5,
  },
  prices: {
    apple: 0.5,
    banana: 0.8646466363,
    pear: 0.2,
  },
};
if (userCart.isUserSignedIn)
  console.log(
    `hello ${userCart.username} your password is ${userCart.password}`
  );
else alert("you need to sign in");
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

//3rd class exercise
//  1. If the user is John AND his password is 1234 - alert him "You are signed in"
//  2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"
if (userCart.username === "Johnny" && userCart.password === 1234)
  alert("You are signed in");
else if (userCart.username === "Johnny" || userCart.password === 1234)
  alert("one credential is false");
else alert("You need to sign in");
// exe.1
//Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
// Using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

// const userAge = Number(prompt("Please submit your age"));

// if (userAge < 18) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if (userAge === 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//   alert("Powering On. Enjoy the ride!");
// }

//Intro on Objects
// Create a stuctured html file linked to a JS file
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// const testObj = {
//     userName:'Joe',
//     password:666,

// }
// const database = [testObj]

// const newsfeed = [{
//     userName:,
//     timeline:,
// },
// {userName:'',
//     timeline:,},
//     {
//         userName:'',
//     timeline:,
//     }
