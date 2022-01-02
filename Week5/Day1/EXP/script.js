// Exercise 1 : HTML Form
// 3. Where will the sent data appear? //as a query string in the url

// Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab//In the payload

// Exercise 3 : JSON Mario

let marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1.Convert this JS object into a JSON object. What happens to the nested objects ? are not indented
const marioToJson = JSON.stringify(marioGame);

// 2.Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
const marioToJsonIndent = JSON.stringify(marioGame, null, 2);
console.log(marioToJsonIndent);
// 3.Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
