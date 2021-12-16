let numberOfGuesses = 0;
function playTheGame() {
  let userNumber;

  const userWantsToPlay = confirm("would you like to play the game");

  if (userWantsToPlay === false) {
    alert("No problem, Goodbye");
  } else {
    userNumber = Number(prompt("choose a number between 0 and 10"));

    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye");
    } else if (userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye");
    } else {
      const computerNumber = Math.round(Math.random() * 10);
      numberOfGuesses++;
      test(userNumber, computerNumber);
    }
  }
}

function test(userNumber, computerNumber) {
  console.log("compNum:", computerNumber);
  console.log("usernum:", userNumber);
  for (let i = 0; i <= 2; i++) {
    if (userNumber == computerNumber) {
      alert("Winner");
      return;
    } else if (numberOfGuesses === 3) {
      alert("out of chances");
      return;
    } else if (userNumber > computerNumber) {
      alert("Your number is bigger than the computer's, guess again");
      console.log("in the biggger:", userNumber);
      userNumber = prompt("choose a new number");
      numberOfGuesses++;
    } else if (userNumber < computerNumber) {
      alert("Your number is smaller then the computer’s, guess again");
      console.log("in the smaller", userNumber);
      userNumber = prompt("choose a new number");
      numberOfGuesses++;
    }
  }
}
