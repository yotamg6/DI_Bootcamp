let isCompleted = false;

function displayItems(isEdited) {
  const container = document.querySelector(".container");
  if (isEdited) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  const getItems = JSON.parse(localStorage.getItem("taskList"));
  console.log(getItems);
  getItems.forEach((obj) => {
    const paraTitle = document.createElement("p");
    const titleText = document.createTextNode(`Title: ${obj.title}`);
    paraTitle.appendChild(titleText);
    const paraStartDate = document.createElement("p");
    const startText = document.createTextNode(`Starting date:${obj.startDate}`);
    paraStartDate.appendChild(startText);
    const paraDaysLeft = document.createElement("p");
    const calcDaysLeft =
      Math.abs(new Date(obj.endDate) - new Date(obj.startDate)) /
      1000 /
      60 /
      60 /
      24;
    const daysLeftText = document.createTextNode(
      `${calcDaysLeft}
      days left to complete the task`
    );
    paraDaysLeft.appendChild(daysLeftText);
    const descriptionPara = document.createElement("p");
    const descriptionText = document.createTextNode(obj.description);
    descriptionPara.append(descriptionText);

    const taskBox = document.createElement("div");

    taskBox.setAttribute("class", "taskBox");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "inputCheck");
    const xBtn = document.createElement("span");
    xBtn.innerHTML = '<i class="fas fa-window-close"></i>';
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editBtn");
    editBtn.textContent = "EDIT TASK";

    taskBox.append(
      paraTitle,
      paraStartDate,
      paraDaysLeft,
      input,
      xBtn,
      editBtn
    );
    container.append(taskBox);
    new Date(obj.endDate) < new Date()
      ? (taskBox.style.backgroundColor = "pink")
      : taskBox;
    input.addEventListener("click", completed);
    editBtn.addEventListener("click", function (e) {
      showHiddenFields(e, obj, getItems, taskBox);
    });
    xBtn.addEventListener("click", function () {
      deleteTask(obj, getItems, taskBox);
    });
    taskBox.addEventListener("click", function () {
      taskBox.appendChild(descriptionPara);
      descriptionPara.style.display === "block"
        ? (descriptionPara.style.display = "none")
        : (descriptionPara.style.display = "block");
    });
  });
}
function completed(e) {
  e.preventDefault();
  if (isCompleted) {
    e.target.parentElement.style.backgroundColor = "red";
    isCompleted = false;
  } else {
    e.target.parentElement.style.backgroundColor = "green";
    isCompleted = true;
  }
}

function deleteTask(task, tasksArr, taskBox) {
  const userDecision = confirm(
    `Are you sure you wish to remove the ${task.title} task?`
  );
  if (userDecision) {
    taskBox.remove();
    const taskIndex = tasksArr.findIndex((obj) => obj.title === task.title);
    tasksArr.splice(taskIndex, 1);
    localStorage.setItem("taskList", JSON.stringify(tasksArr));
  }
}

function showHiddenFields(e, task, tasksArr, taskBox) {
  e.preventDefault();
  const editForm = document.getElementById("todo");
  editForm.style.display = "block";
  editForm.addEventListener("submit", function (e) {
    editTask(e, task, tasksArr, editForm, taskBox);
  });
}

function editTask(e, task, tasksArr, editForm, taskBox) {
  e.preventDefault();
  taskBox.remove();

  const editTitle = editForm.elements[0].value;
  const editDesc = editForm.elements[1].value;
  const editStartDate = editForm.elements[2].value;
  const editEndDate = editForm.elements[3].value;

  const newTask = {};
  newTask.title = editTitle;
  newTask.description = editDesc;
  newTask.startDate = editStartDate;
  newTask.endDate = editEndDate;

  const oldTaskIndex = tasksArr.findIndex((obj) => obj.title === task.title);
  tasksArr.splice(oldTaskIndex, 1, newTask);
  tasksArr.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  localStorage.setItem("taskList", JSON.stringify(tasksArr));
  let isEdited = true;
  displayItems(isEdited);
  editForm.style.display = "none";
}
displayItems();

//checkbox not checking?
// clear the fields
//add time?
