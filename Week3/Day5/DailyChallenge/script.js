const body = document.querySelector("body");
const container = document.querySelector(".container");
const columns = document.querySelector(".columns");
const leftCol = document.querySelector(".leftCol");
let blackSquare;
for (let i = -1; i < 49; i++) {
  blackSquare = document.createElement("div");
  blackSquare.setAttribute("class", "square");
  body.append(blackSquare);
  if (
    (i > 0 && i < 4) ||
    (i > 21 && i < 25) ||
    (i % 7 == 0 && i !== 0) ||
    i == 11 ||
    i == 11 + 7 ||
    i == 11 + 7 * 2 ||
    i == 11 + 7 * 3 ||
    i == 11 + 7 * 4 ||
    i == 11 + 7 * 5
  ) {
    blackSquare.setAttribute("class", "star");
    blackSquare.textContent = "*";
  }
}
