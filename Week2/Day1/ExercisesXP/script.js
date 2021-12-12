//exe.1
// Store your favorite food into a variable.
// Store your favorite meal into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>

const favoriteFood = "Hummus";
const favoriteMeal = "Breakfast";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

//exe.2
// Using this array : let watchedSeries = ["black mirror", "money heist", "the big bang theory"]
// Create a variable named watchedSeriesLength that is equal to the number of series in the watchedSeries array.
// Create a variable named myWatchedSeries, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Console.log the watchedSeries array.
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
const watchedSeriesLength = watchedSeries.length;
// const myWatchedSeries = `I watched ${watchedSeries[0]}, ${watchedSeries[1]} and ${watchedSeries[2]}`;
// console.log(myWatchedSeries);
const myWatchedSeries = "The crown, Game of Throwns, Outlander";
console.log(
  `I watched 6 tv shows: ${myWatchedSeries}, ${watchedSeries[0]}, ${watchedSeries[1]} and ${watchedSeries[2]} `
);

console.log("indexOf", watchedSeries.indexOf("the big bang theory"));
watchedSeries[2] = "Friends";
watchedSeries.push("Seinfeld");
watchedSeries.unshift("The Crown");
console.log("new list", watchedSeries);
const mirrorIndex = watchedSeries.indexOf("black mirror");
watchedSeries.splice(mirrorIndex, 1);
const money = "money heist";
console.log("third letter", money[2]);
console.log("without black", watchedSeries);
//exe 3
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celcTemp = 24;
const toFarenhit = (celcTemp / 5) * 9 + 32;
console.log(`${celcTemp}C is ${toFarenhit}F`);
////////////////////////
// exe 4.
let c;
let a = 34;
let b = 21;
console.log(a + b); //first expression. 34 and 21 are numbers, added together is 35
// Prediction:35
// Actual:35

a = 2;

console.log(a + b); //second expression. a is reassigned another value(2). 2+21=23
// Prediction: 23
// Actual:23

//What is the value of c? c=undefined

console.log(3 + 4 + "5"); //=75. Because of type coercion, 7 (the result of incramenting 3+4) is concatenated to 5.
//exe 4.

typeof 15;
// Prediction:number
// Actual:number

typeof 5.5;
// Prediction:number
// Actual:number

typeof NaN;
// Prediction:number. NaN is a number type, that cannot be represented in actual numbers, like 0/0
// Actual:number

typeof "hello"; //anything between '' is type string.
// Prediction:string
// Actual:string

typeof true; //true and false are boolean type
// Prediction:boolean
// Actual:boolean

typeof (1 != 2); //type of comparison is a boolean
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"; //plus sign is used a a concatenation sign.JS will concatenate the two strings
// Prediction: hamburgers
// Actual:hamburgers

"hamburgers" - "s"; //JS understands this as a mathematical action and will do type coercion. But a string - string, does not have a numeral value.
// Prediction:NaN
// Actual:NaN

"1" + "3"; //concatenated strings
// Prediction:13
// Actual:13

"1" - "3"; //JS understands this as a mathematical action and will do type coercion. 1-3=-2
// Prediction: -2
// Actual: -2

"johnny" + 5; // when adding a string to a number, JS does type coercion, so 5 becomes a string.
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5; //JS understands this as a mathematical action and will do type coercion. But a string - number, does not have a numeral value.
// Prediction:NaN
// Actual:NaN

99 * "hello"; // the * can only be used for numbers. a number*string equals NaN
// Prediction:NaN
// Actual:NaN

1 != 1; //comparison with a value of either true or false. here we have '1 is not equal to 1. But this expression is false
// Prediction:false
// Actual:false

1 == "1"; // they have an identical value, though a diffrent type. The two equals sign checks for a value identity, resulting in true
// Prediction:true
// Actual:true

1 === "1"; //though the values are identical, the types (string and number) are not, resulting in false.
// Prediction: flase
// Actual: false

5 + "34"; //34 is a string (placed inbetween quotes).when adding a string to a number, JS does type coercion, so 5 becomes a string that is concatenated to '34'
// Prediction:534
// Actual:534

5 - "4"; // 4 is a string, number minus a string results in NaN
// Prediction: NaN
// Actual: NaN

10 % 5; //remainder operator. when dividing 10 by 5, there is no remainder, thus the result is 0.
// Prediction: 0
// Actual: 0

5 % 10; // 10*0=0. 5-0=5
// Prediction: 5
// Actual: 5

"Java" + "Script"; //concetenating two strings
// Prediction: JavaScript
// Actual:JavaScript

" " + " "; //concetenating two white space strings
// Prediction:'  '
// Actual:'  '

" " + 0; // when adding a string to a number, JS does type coercion, thus 0 becomes a string
// Prediction:'0'
// Actual:'0'

true + true; //when using math operators on true or false, JS does type coercion. True then is coerced to 1, and flase is coerced to zero
// Prediction: 2
// Actual:2

true + false; //when using math operators on true or false, JS does type coercion. True then is coerced to 1, and flase is coerced to zero
// Prediction: 1
// Actual:1

false + true; //when using math operators on true or false, JS does type coercion. True then is coerced to 1, and flase is coerced to zero
// Prediction:1
// Actual:1

false - true; //when using math operators on true or false, JS does type coercion. True then is coerced to 1, and flase is coerced to zero
// Prediction: -1
// Actual:

!true; //negating true results in false
// Prediction: false
// Actual:false

3 - 4; //simply 3-4
// Prediction: -1
// Actual:-1

"Bob" - "bill"; //string-string resuts in NaN
// Prediction: NaN
// Actual: NaN
