// lesson exe 1.
let pricesRestaurant = [25, 19, 46];

// 1. Create a function, that takes this array, give me the sum

function findTotalSum() {
  let sum = 0;
  for (let price of pricesRestaurant) {
    sum = sum + price;
  }
  return sum;
}

// 2. Function take the sum and * 1.17

function findTotalSumWithTaxes() {
  let sumWithTaxes = findTotalSum() * 1.17;
  // 				 = 90 * 1.17
  return sumWithTaxes;
}

// 3. Function waiterspeaking -> tell me the totalsum
// if the waiter speaks english ->
// if the waiter speaks french ->

function waiterSpeaking(language) {
  let result = findTotalSumWithTaxes();
  if (language == "english") {
    return `the price is ${result}`;
  } else if (language == "french") {
    return `Le prix est ${result}`;
  } else {
    return `//-- ${result}`;
  }
}

console.log(waiterSpeaking("english"));

//4. Create a function that display the price that each of us needs to pay (price including taxes)
function eachPays() {
  const dividedBy3 = findTotalSumWithTaxes() / 3;
  return dividedBy3;
}
console.log(eachPays());
// exe 1.
// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)
// 4. Call the function

function calcAge(myAge) {
  const mumAge = 2 * myAge;
  const dadAge = 1.5 * mumAge;
  console.log(`the age of my mum is ${mumAge} and my dad's ${dadAge}`);
}
calcAge(12);

//exe 2.
// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Return the age of my mum (my mum is twice my age)
// 4. Call the function
// 5. Console.log the age of my mum
function mumAge(myAge) {
  const motherAge = myAge * 2;
  return motherAge;
}
console.log(mumAge(34));
