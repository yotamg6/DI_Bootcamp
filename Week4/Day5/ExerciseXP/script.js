const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];
const container = document.querySelector(".container");
// const form = document.forms[0].elements.roboName;
const form = document.forms[0];
console.log(form);
form.addEventListener("submit", getInput);

robots.forEach((robot) => {
  displayRobo(robot);
});

function getInput(e) {
  e.preventDefault();
  const nameTyped = e.target.elements[0].value.toLowerCase();
  console.log(nameTyped);
  robots.filter((robot, index) =>
    robot.name.toLowerCase().includes(nameTyped)
      ? displaySingleRobo(robot, index)
      : robot.name
  );
}

function displayRobo(robot, index) {
  const divRobo = document.createElement("div");
  divRobo.setAttribute("class", "roboBox");
  const imgRobo = document.createElement("img");
  imgRobo.setAttribute("src", robot.image);
  const h1Robo = document.createElement("h1");
  h1Robo.textContent = robot.name;
  const paraRobo = document.createElement("p");
  paraRobo.textContent = robot.email;
  divRobo.append(imgRobo, h1Robo, paraRobo);
  container.append(divRobo);
  if (index >= 0) {
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    container.style.width = "300px";
  }
}

function displaySingleRobo(robot, index) {
  if (index >= 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    displayRobo(robot, index);
  }
}
