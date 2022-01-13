let isCompleted = false;
function displayItems() {
  //   e.preventDefault();
  const getItems = JSON.parse(localStorage.getItem("taskList"));
  console.log(getItems);

  getItems.forEach((obj) => {
    const paraTitle = document.createElement("p");
    const titleText = document.createTextNode(`Title: ${obj.name}`);
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
    console.log(calcDaysLeft);
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

    taskBox.append(paraTitle, paraStartDate, paraDaysLeft, input);
    document.body.append(taskBox);

    new Date(obj.endDate) < new Date()
      ? (taskBox.style.backgroundColor = "pink")
      : taskBox;
    taskBox.addEventListener("click", function () {
      taskBox.appendChild(descriptionPara);
      descriptionPara.style.display === "block"
        ? (descriptionPara.style.display = "none")
        : (descriptionPara.style.display = "block");
    });
    input.addEventListener("click", isCompleteFun);
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
displayItems();

// function displayDescription() {}
