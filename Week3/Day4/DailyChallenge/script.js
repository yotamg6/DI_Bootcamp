// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array :
// let listTasks = [];
// Create a function called addTask(). As soon as the user clicks on the button:
// - check that the input is not empty,
// - then add it to the array (ie. add the text of the task)
// - then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// - Each new task added should have:
//   - an input type="checkbox
//   - a “X” button. Use font awesome for the “X” button.

let listTasks = [];
const formSelected = document.forms[0];

const submitBtnSelected = document.querySelector("button");
const inputSelected = document.querySelector("input");
const listTasksSelected = document.querySelector(".listTasks");
formSelected.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  let inputValue = e.target.elements.inputField.value;

  if (inputValue) {
    listTasks.push(inputValue);
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    listTasksSelected.append(container);
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-window-close");
    const taskItem = document.createElement("input");
    const taskText = document.createTextNode(inputValue);
    const label = document.createElement("label");
    label.append(taskText);
    taskItem.setAttribute("type", "checkbox");
    taskItem.setAttribute("class", "check");
    container.append(icon, taskItem, label);
    formSelected.reset();
  }
}
