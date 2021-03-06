//work plan
// e.add celebs
// fix the bug with the timer and winning message
// before submitting: remove all consolelogs, reset the time to 120

//select elements
const btnAsk = document.querySelector(".btnAsk");
const btnGuess = document.querySelector(".btnGuess");
const btnReset = document.querySelector(".btnReset");
const card = document.querySelector(".card");
const askInputField = document.querySelector(".askInputField");
const guessInputField = document.querySelector(".guessInputField");
const messageBox = document.querySelector(".message");
const timerBox = document.querySelector(".timerBox");
const timerDisplayed = document.querySelector(".timer");
const form = document.forms[0];

let time = 15;
let ranNum;
let timer;
let clickCounter = 0;
let isWord;
let celebName;
let indicator;
const celebrities = {
  c1: {
    fullName: "cristiano ronaldo",
    keyWords: [
      "sport",
      "player",
      "football",
      "footballer",
      "male",
      "man",
      "portugal",
      "manchester",
      "portugese",
    ],
  },
  c2: {
    fullName: "angelina jolie",
    keyWords: [
      "actress",
      "pitt",
      "adopt",
      "mrs",
      "smith",
      "director",
      "humanitarian",
      "american",
      "usa",
      "woman",
    ],
  },
  c3: {
    fullName: "steve jobs",
    keyWords: [
      "man",
      "buiseness",
      "buisenessman",
      "media",
      "apple",
      "ipod",
      "mac",
      "computer",
      "deceased",
      "american",
      "usa",
      "inventor",
      "pioneer",
    ],
  },
  c4: {
    fullName: "lady gaga",
    keyWords: [
      "singer",
      "woman",
      "usa",
      "american",
      "pop",
      "actress",
      "stefani",
      "joanne",
      "angelina",
      "germanotta",
      "songwriter",
      "shallow",
    ],
  },
  c5: {
    fullName: "joe biden",
    keyWords: [
      "president",
      "usa",
      "democrat",
      "american",
      "america",
      "head",
      "powerful",
      "politics",
      "politician",
      "white",
      "man",
    ],
  },
  c6: {
    fullName: "britney spears",
    keyWords: [
      "woman",
      "pop",
      "singer",
      "dancer",
      "songwriter",
      "icon",
      "american",
      "usa",
      "crazy",
    ],
  },
};

///
btnAsk.addEventListener("click", getInput);
btnGuess.addEventListener("click", getInput);
btnReset.addEventListener("click", reset);

function getInput(e) {
  e.preventDefault();
  const question = askInputField.value.toLowerCase().replaceAll("?", " ");
  // console.log(question);
  const guess = guessInputField.value.toLowerCase().replaceAll("?", "");
  // console.log(guess);
  if (question && clickCounter === 0) {
    startGame();
    handleQuestions(question);
    // console.log("asked first", clickCounter);
    clickCounter++;
  } else if (question && clickCounter > 0 && time) {
    handleQuestions(question);
    // console.log("asked again", clickCounter);
  } else if (guess && clickCounter === 0) {
    startGame();
    handleGuesses(guess);
    // console.log("guessed first", clickCounter);
    clickCounter++;
  } else if (guess && clickCounter > 0 && time) {
    handleGuesses(guess);
    // console.log("guessed again", clickCounter);
  } else if (time == null) {
    messageBox.textContent =
      "THE GAME IS OVER. PLEASE PRESS THE RESTART BUTTON TO PLAY AGAIN";
    indicator = "wrong";
    toggleMessage(indicator);
    // messageBox.classList.toggle("alert", true);
  } else {
    messageBox.textContent =
      "PLEASE ASK A QUESTION \nOR GUESS WHO THE CELEBRITY IS";
    // messageBox.classList.toggle("alert", true);
    indicator = "wrong";
    toggleMessage(indicator);
  }
}

function startGame() {
  ranNum = Math.trunc(Math.random() * 6) + 1;
  celebObj = "c" + ranNum;
  celebName = celebrities[celebObj]["fullName"];
  console.log(celebName);
  timer = setInterval(clock, 1000);
}

function clock() {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  timerDisplayed.textContent = ` ${min}:${sec}`;
  if (time > 0 && time < 5) {
    timerBox.classList.toggle("timerBoxLast5", true);
    time--;
  } else if (time === -1) {
    clearInterval(timer);
    messageBox.textContent = `TIME'S UP! THE RIGHT GUESS WAS:\n ${celebName.toUpperCase()}`;
    indicator = "wrong";
    toggleMessage(indicator);
    // messageBox.classList.toggle("posNotif", false);
    // messageBox.classList.toggle("alert", true);
    gameOver();
  } else {
    time--;
  }
}

function handleQuestions(question) {
  const quesElements = question.split(" ");
  const currentKWords = celebrities[celebObj]["keyWords"];
  // console.log(quesElements);
  // console.log(currentKWords);
  for (let elem of quesElements) {
    isWord = currentKWords.some((kWord) => kWord == elem);
    if (isWord) {
      break;
    }
  }
  if (isWord) {
    messageBox.textContent = "YES! YOU ARE GETTING CLOSER";
    // messageBox.classList.toggle("alert", false);
    // messageBox.classList.toggle("posNotif", true);
    indicator = "good";
    toggleMessage(indicator);
  } else {
    // messageBox.classList.toggle("posNotif", false);
    // messageBox.classList.toggle("alert", true);
    messageBox.textContent = "NOT QUITE, TRY AGAIN";
    indicator = "wrong";
    toggleMessage(indicator);
  }
  form.reset();
}

function handleGuesses(guess) {
  // messageBox.classList.toggle("posNotif", false);
  // messageBox.classList.toggle("alert", false);
  indicator = "reset";
  toggleMessage(indicator);
  if (guess == celebName) {
    messageBox.textContent = `WELL DONE! YOU GUESSED RIGHT! THE CELEBRITY BEHIND THE CARD WAS ${celebName.toUpperCase()}`;
    indicator = "winner";
    toggleMessage(indicator);
    // messageBox.classList.toggle("winnerNotif", true);
    gameOver(guess);
  } else {
    messageBox.textContent = "THAT IS NOT WHO I AM. TRY AGAIN!";
    indicator = "wrong";
    toggleMessage(indicator);
    // messageBox.classList.toggle("alert", true);
  }
  form.reset();
}

function gameOver() {
  card.style.backgroundImage = `url("images/pic${ranNum}.jpeg")`;
  timerDisplayed.textContent = "00:00";
  clearInterval(timer);
  askInputField.style.display = "none";
  btnAsk.style.display = "none";
  timerBox.style.display = "none";
  time = null;
}

function reset() {
  card.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(61, 82, 199, 0.52),
    rgba(136, 134, 38, 0.73)
  ),
  url("images/guesspic.jpeg")`;
  timerBox.classList.toggle("timerBoxLast5", false);
  indicator = "reset";
  toggleMessage(indicator);
  // messageBox.classList.toggle("alert", false);
  // messageBox.classList.toggle("winnerNotif", false);
  messageBox.textContent = `LET'S HAVE ANOTHER ROUND!`;
  time = 120;
  clickCounter = 1;
  timer = null;
  ranNum = null;

  timerDisplayed.textContent = "02:00";
  askInputField.style.display = "block";
  btnAsk.style.display = "block";
  timerBox.style.display = "block";
  // console.log("timer value", timer);
  // console.log("ranNum value", ranNum);
  // startGame();
}

function toggleMessage(indicator) {
  if (indicator == "good") {
    messageBox.classList.toggle("alert", false);
    messageBox.classList.toggle("posNotif", true);
  } else if (indicator == "wrong") {
    messageBox.classList.toggle("alert", true);
    messageBox.classList.toggle("posNotif", false);
  } else if (indicator == "winner") {
    messageBox.classList.toggle("alert", false);
    messageBox.classList.toggle("posNotif", false);
    messageBox.classList.toggle("winnerNotif", true);
  } else if (indicator == "reset") {
    messageBox.classList.toggle("alert", false);
    messageBox.classList.toggle("posNotif", false);
    messageBox.classList.toggle("winnerNotif", false);
  }
}
