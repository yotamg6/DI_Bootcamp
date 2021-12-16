//exe 1
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe() {
  console.log("my name is Yotam, I am 35 and I like icecream");
}
infoAboutMe();

// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
//exe 2.
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.
function calculateTip() {
  let tip;
  const bill = prompt("what is the sum of your bill?");
  if (bill < 50) tip = bill * 0.2;
  else if (bill > 50 && bill < 200) tip = bill * 0.15;
  else if (bill > 200) tip = bill * 0.1;
  console.log(
    `your tip amounts to ${tip}$ and your final bill to ${tip + bill}$`
  );
}
calculateTip();

//exe 3.
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313
function isDivisible() {
  let sum = 0;
  for (let i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      console.log(`${i} is divisble by 23`);
      sum = sum + i;
    }
  }
  console.log("sum of all numbers that are divisble by 23", sum);
}
isDivisible();
// Bonus: Add a parameter divisor to the function.
function isDivisible2(divisor) {
  for (let i = 0; i < 500; i++) {
    if (i % divisor === 0) {
      console.log(`${i} is divisble by ${divisor}`);
    }
  }
}
isDivisible2(46);

//exe 4.

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};
// 1.Add the stock and prices objects to your js file.
// 2.Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3.Create a function called myBill() that takes no parameters.
// 4.The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
const shoppingList = ["banana", "orange", "apple"];
let sum = 0;
function myBill() {
  for (let fruit of shoppingList) {
    if (stock[fruit] > 0) {
      console.log(`the price of ${fruit} is ${prices[fruit]}`);
      sum = sum + prices[fruit];
      console.log(stock[fruit]);
      stock[fruit]--;
      console.log(stock[fruit]);
    }
  }
  return sum;
}
const shoppingListSum = myBill();
console.log(shoppingListSum);

//exe 5.

// Note: Read the illustration (point 4), while reading the instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//  - an item price
//  - and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
// 4. To illustrate:

// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true
let sum1 = 0;
function changeEnough(itemPrice, amountOfChange) {
  for (let change of amountOfChange) {
    sum1 = sum1 + change;
  }
  if (sum1 >= itemPrice) return true;
  else return false;
}
const result = changeEnough(12, [15, 15, 15, 15]);
console.log(result);

// exe. 6
// Let’s create functions that calculate your vacation’s costs:

// 1.Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
const pricePerNight = 140;
function hotelCost() {
  let numOfNights = Number(
    prompt("how many nights would you like to stay at the hotel?")
  );
  while (numOfNights === "false" || isNaN(numOfNights)) {
    Number(prompt("how many nights would you like to stay at the hotel?"));
  }
  const totalHotelPrice = numOfNights * pricePerNight;
  return totalHotelPrice;
}
// console.log(hotelCost());
// 2.Define a function called planeRideCost().
function planeRideCost() {
  let destination = prompt("Where would you like to go?");
  while (destination === "false" || typeof destination !== "string") {
    destination = prompt("Where would you like to go?");
  }
  let price;
  if (destination === "London") price = 183;
  else if (destination === "Paris") price = 220;
  else price = 300;
  return price;
}
// const farePrice = planeRideCost();
// console.log("The price for this ticket is", farePrice);
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// 3.Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
const carDailyPrice = 40;
function rentalCarCost() {
  let daysRentingCar = Number(
    prompt("For how many days would you like to rent a car?")
  );
  while (daysRentingCar === "false" || isNaN(daysRentingCar)) {
    daysRentingCar = Number(
      prompt("For how many days would you like torent a car?")
    );
  }
  let totalCarCost;
  if (daysRentingCar > 10)
    totalCarCost =
      carDailyPrice * daysRentingCar - carDailyPrice * daysRentingCar * 0.05;
  else totalCarCost = carDailyPrice * daysRentingCar;
  return totalCarCost;
}
// console.log("the total car rental cost is", rentalCarCost());

// 4.Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
  //   console
  //     .log
  //     // `The car costs ${rentalCarCost()}, the plane tickts are ${planeRideCost()}, the hotel reservation is ${hotelCost}`
  //     ();
  const totalCost = rentalCarCost() + planeRideCost() + hotelCost();
  return totalCost;
}
console.log("the total vaccation cost is", totalVacationCost());

// 5.Call the function totalVacationCost()

// 6.Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
