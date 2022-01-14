let isCompleted = false;
function displayItems() {
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
    // console.log(calcDaysLeft);
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
    // const i = document.createElement("i");
    // i.innerHTML = 'class="fas fa-window-close';
    taskBox.append(paraTitle, paraStartDate, paraDaysLeft, input, xBtn);
    document.body.append(taskBox);
    new Date(obj.endDate) < new Date()
      ? (taskBox.style.backgroundColor = "pink")
      : taskBox;
    input.addEventListener("click", isCompleteFun);
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
function isCompleteFun(e) {
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

displayItems();

//edit
//add time?
// function displayDescription() {}
