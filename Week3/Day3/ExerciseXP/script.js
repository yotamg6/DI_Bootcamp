// Exercise 1 : Move The Box
// Instructions
// Move the box from left to right
// Tip: use setInterval
// let pos = 0;
// function myMove() {
//   const box = document.querySelector("#animate");
//   const id = setInterval(function () {
//     if (pos === 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       box.style.left = pos + "px";
//     }
//   }, 1);
// }

// Exercise 2: Drag & Drop
// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.
const box = document.querySelector("#box");
box.addEventListener("dragstart", drag);
box.addEventListener("dragend", drag);
function drag(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}
const bigBoxSelected = document.querySelector("#bigger");
bigBoxSelected.addEventListener("dragover", draggingOver);
bigBoxSelected.addEventListener("dragenter", changeBorder);
bigBoxSelected.addEventListener("dragleave", changeBorder);
bigBoxSelected.addEventListener("drop", droppingItem);

function draggingOver(e) {
  e.preventDefault();
}
function changeBorder(e) {
  console.log("entered");
  e.target.classList.toggle("inTarget");
}
function droppingItem(e) {
  e.preventDefault();
  const dataItem = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(dataItem);
  e.target.appendChild(draggedItem);
}
