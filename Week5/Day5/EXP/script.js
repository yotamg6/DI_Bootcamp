// You should use this API: https://swapi.dev/ to get the data and update it “randomly” in your website by clicking a button.

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.

function retrieveElements() {
  const findBtn = document.querySelector("button");
  const heroCard = document.querySelector(".heroCard");
  findBtn.addEventListener("click", displayData);
  return [findBtn, heroCard];
}

async function getData() {
  const ranNum = Math.round(Math.random() * 9);
  //   console.log(ranNum);
  const dataPeopleFetched = await fetch(
    `https://swapi.dev/api/people/${ranNum}
  `
  );
  const charObj = await dataPeopleFetched.json();

  //   console.log(peopleObj);
  return charObj;
}

async function displayData() {
  //   const findBtn = retrieveElements()[0];
  const heroCard = retrieveElements()[1]; //I can simply append it on the body. no need for this const. without it the first function can be self invoked
  const charObj = await getData();
  console.log(charObj);
  const heroDiv = document.createElement("div");
  const heroPara = document.createElement("p");
  const h1Name = document.createElement("h1");
  h1Name.textContent = charObj.name;
  const h6Height = document.createElement("h6");
  h6Height.textContent = `Height: ${charObj.height}`; //do I need to get the key name also in a comp way?
  const h5Gender = document.createElement("h5");
  h5Gender.textContent = `Gender: ${charObj.gender}`;
  const h4birthYear = document.createElement("h4");
  h4birthYear.textContent = `Birth Year:${charObj.birth_year}`;
  const h3HomeWorld = document.createElement("h3");
  h3HomeWorld.textContent = `Home World:${charObj.homeworld}`; //do I need to get them dinamically?
  heroDiv.append(h1Name, h6Height, h5Gender, h4birthYear, h3HomeWorld);
  heroCard.append(heroDiv);
}

// async function fetchPlanets() {
//   const fetched = await (await fetch("https://swapi.dev/api/planets")).json();
//   console.log(fetched);
// }
retrieveElements();
// getData();
// displayData();
// fetchPlanets();

//1. self invoke the first fun
//2. when pressed on the btn again, the first card content is replaced by another
//put the card at the center
//background
//display planet name at the display fun (probably hard coded)
