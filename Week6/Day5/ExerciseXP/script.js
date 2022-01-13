//retrieve elements

const form = document.getElementById("todo");
form.addEventListener("submit", setData);
//  ‏

let tasksArr = JSON.parse(localStorage.getItem("taskList")) || [];
tasksArr.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
console.log(tasksArr);
function setData(e) {
  e.preventDefault();
  const tasksObj = {};
  const userName = form.elements[0].value;
  const description = form.elements[1].value;
  const startDate = form.elements[2].value;
  const endDate = form.elements[3].value;
  tasksObj["name"] = userName;
  tasksObj["description"] = description;
  tasksObj["startDate"] = startDate;
  tasksObj["endDate"] = endDate;
  tasksArr.push(tasksObj);
  tasksArr.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  console.log(tasksArr);
  localStorage.setItem("taskList", JSON.stringify(tasksArr));
}

///clear the form fields
////see when to clear the local sotrage
/////prevent user from typing inccorect data type
/////pointer for the checkboxex
// mark boxes checked when clicked
