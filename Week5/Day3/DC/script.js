function makeAllCaps(arr) {
  let promiseCheckString = new Promise(function (resolve, reject) {
    arr.forEach((elem) =>
      typeof elem !== "string"
        ? reject(arr)
        : resolve(arr.map((elem) => elem.toUpperCase()))
    );
  });
  return promiseCheckString;
}

function sortWords(arr) {
  arr.sort();
}
const strArr = ["here", "is", "just", "a", "test"];
const complexArr = [12, "another", "one"];
makeAllCaps(complexArr)
  .then((arrCapped) => {
    sortWords(arrCapped);
    return arrCapped;
  })
  .then((result) => console.log(result))
  .catch((error) => console.log("Please use only strings", error));
////////////////
//exe 2
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

// 1.Create three functions that use promises which can be chained.
// 2.Call the first function toJs():
// this function should take the morse json object provided above, and convert it to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return morse javascript object (use resolve)
// 3.The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function should asks the user for a word or a sentence
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with it’s morse translation of the user’s word.
// 4.The last function called joinWords(), should join the morse translation by using line break.

function toJs(morse) {
  let strToObj = new Promise(function (resolve, reject) {
    const morseJS = JSON.parse(morse);
    // console.log(morseJS);
    if (morseJS === {}) reject("error. Empty object", morseJS);
    else {
      resolve(morseJS);
    }
  });
  return strToObj;
}
let isChar;
function toMorse(morseJS) {
  let transMorse = new Promise(function (resolve, reject) {
    const userPromptAnswer = prompt("please type-in a word or a sentence");
    for (let [key, value] of Object.entries(morseJS)) {
      const answerArr = userPromptAnswer.split("");
      isChar = answerArr.some((letter) => letter === key);
      if (isChar) break;
    }
    if (isChar)
      resolve(userPromptAnswer.split("").map((char) => (char = morseJS[char])));
    else reject("not a valid character");
  });
  return transMorse;
}

function joinWords(morseTrans) {
  const newTransStr = morseTrans.join("\n");
  return newTransStr;
}

toJs(morse)
  .then((morseJS) => toMorse(morseJS))
  .then((transMorse) => joinWords(transMorse))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
