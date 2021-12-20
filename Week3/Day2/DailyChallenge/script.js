// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
// In this exercise you will complete the functionality with event listeners.

// Follow these steps :

// 1.Get the value of each of the inputs in the HTML file when the button is clicked.
// 2.Make sure the values are not empty
// 3.Write a story that uses each of the values.
// 4.Make sure you check the console for errors when playing the game.
// 5.Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const btnLib = document.querySelector("#lib-button");
let allInputs = document.querySelectorAll("input");
let storyArr = [];
btnLib.addEventListener("click", getInputs);

function getInputs() {
  for (let input of allInputs) {
    const inputValue = input.value;
    if (inputValue) {
      storyArr.push(inputValue);
    } else alert("please submit all fields");
  }
  console.log(storyArr);
  const temp = storyArr[0];
  storyArr[0] = storyArr[1];
  storyArr[1] = temp;
  storyArr.splice(2, 0, "is");
  storyArr.splice(4, 0, "who");
  storyArr.splice(6, 0, "to");
  storyArr.push("every week");
  console.log(storyArr);
  const storyStr = storyArr.join(" ");
  console.log(storyStr);
  const storyPara = document.createElement("p");
  const storyText = document.createTextNode(storyStr);
  storyPara.appendChild(storyText);
  const storyId = document.querySelector("#story");
  storyId.appendChild(storyPara);
  const shuffleBtn = document.querySelector(".shuffle");
  shuffleBtn.addEventListener("click", function () {
    storyShuffled(storyPara, storyId);
  });
}

function storyShuffled(para, storyid) {
  const randomStart = Math.round(Math.random() * 8);
  const randomEnd = Math.round(Math.random() * 8);
  const temp2 = storyArr[randomStart];
  storyArr[randomStart] = storyArr[randomEnd];
  storyArr[randomEnd] = temp2;
  console.log(storyArr);
  const storyStr2 = storyArr.join(" ");
  para.textContent = storyStr2;
  storyid.appendChild(para);
}
