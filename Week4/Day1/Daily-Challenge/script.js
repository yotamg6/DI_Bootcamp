const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1.Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// 2.Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// 3.Find and display the total score of the users.
let biggerScore = [];
let totalScore = 0;
gameInfo.forEach((obj) => {
  obj.username += "!";
  obj.score > 5 ? biggerScore.push(obj.username) : obj.username;
  totalScore += obj.score;
});
console.log(biggerScore);
console.log(totalScore);
