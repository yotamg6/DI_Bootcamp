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
  const title = form.elements[0].value;
  const description = form.elements[1].value;
  const startDate = form.elements[2].value;
  const endDate = form.elements[3].value;
  tasksObj["title"] = title;
  tasksObj["description"] = description;
  tasksObj["startDate"] = startDate;
  tasksObj["endDate"] = endDate;
  tasksArr.push(tasksObj);
  tasksArr.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  console.log(tasksArr);
  localStorage.setItem("taskList", JSON.stringify(tasksArr));
}

///clear the form fields
/////prevent user from typing inccorect data type
