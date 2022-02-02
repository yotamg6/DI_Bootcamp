//exe.1 Create a structured HTML file, and add the code below in the body.
// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base
function insertRow() {
  const table = document.getElementById("sampleTable");
  const row = document.createElement("tr");
  const tableData = document.createElement("td");
  tableData.textContent = "new line";
  row.appendChild(tableData);
  table.appendChild(row);
}
//exe2.
// Add a few event listeners to the button. The event listeners should change the style of the button
const buttonStyle = document.querySelector("#jsstyle");
buttonStyle.addEventListener("click", backgroundColor);
buttonStyle.addEventListener("click", borders);
buttonStyle.addEventListener("click", fontSize);

function backgroundColor() {
  buttonStyle.style.backgroundColor = "pink";
}
function borders() {
  buttonStyle.style.border = "1px solid black";
}
function fontSize() {
  buttonStyle.style.fontSize = "20px";
}

//Exercise 1 in class
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundcolor of the page to red
// 3. the same for blue
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");

btnRed.classList.add("red");
btnBlue.classList.add("blue");

btnRed.addEventListener("click", clickToRed);
btnBlue.addEventListener("click", clickToBlue);

function clickToRed() {
  document.body.style.backgroundColor = "red";
}
function clickToBlue() {
  document.body.style.backgroundColor = "blue";
}

//Exercise 2 in class
let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that
// changes the background color of the document,
// to the color of the button (do it directly in the JS)

const container = document.getElementById("container");

for (let element of colors) {
  let newButton = document.createElement("button");
  let text = document.createTextNode(element.toUpperCase());
  newButton.appendChild(text);
  container.appendChild(newButton);
  newButton.setAttribute("id", element);
  newButton.addEventListener("click", changeBackgroundColor);
}

function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.innerHTML;
}
