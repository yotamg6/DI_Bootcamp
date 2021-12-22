const pallet = document.querySelector(".pallet");
const canvas = document.querySelector(".canvas");
const clearBtn = document.querySelector(".clear");
let mouseIsDown = false;
let chosenColor;
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
];
for (let color of colors) {
  const colorDiv = document.createElement("div");

  colorDiv.setAttribute("class", "pallet");
  colorDiv.setAttribute("class", "colorBox");
  colorDiv.style.backgroundColor = color;
  colorDiv.addEventListener("click", getChosenColor);
  pallet.appendChild(colorDiv);
}
for (let i = 0; i < 24 * 60; i++) {
  const whiteBoxDiv = document.createElement("div");
  whiteBoxDiv.setAttribute("class", "canvas");
  whiteBoxDiv.setAttribute("class", "whiteBox");
  whiteBoxDiv.addEventListener("click", changeBackgroundColor);
  whiteBoxDiv.addEventListener("mousedown", isMouseDown);
  whiteBoxDiv.addEventListener("mouseover", mouseOver);
  whiteBoxDiv.addEventListener("mouseup", isMouseDown);
  canvas.append(whiteBoxDiv);
}
const allWhiteBoxesList = document.querySelectorAll(".whiteBox");

function getChosenColor(e) {
  chosenColor = e.target.style.backgroundColor;
}
function changeBackgroundColor(e) {
  if (chosenColor) {
    e.target.style.backgroundColor = chosenColor;
  }
}
function isMouseDown() {
  if (mouseIsDown) mouseIsDown = false;
  else mouseIsDown = true;
}
function mouseOver(e) {
  if (mouseIsDown) {
    changeBackgroundColor(e);
  }
}

clearBtn.addEventListener("click", clear);
function clear() {
  chosenColor = "white";
  for (let box of allWhiteBoxesList) {
    box.style.backgroundColor = "white";
  }
}
