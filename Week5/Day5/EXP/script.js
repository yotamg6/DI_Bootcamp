// You should use this API: https://swapi.dev/ to get the data and update it “randomly” in your website by clicking a button.

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:

const retrieveElements = (() => {
  const findBtn = document.querySelector("button");
  const heroCard = document.querySelector(".heroCard");
  findBtn.addEventListener("click", function () {
    displayData(heroCard);
  });
})();

async function getData() {
  const ranNum = Math.round(Math.random() * 9 + 1);
  console.log(ranNum);
  const dataPeopleFetched = await fetch(
    `https://www.swapi.tech/api/people/${ranNum}
  `
  );
  const charObj = await dataPeopleFetched.json();
  return charObj;
}

async function displayData(heroCard) {
  const charObj = await getData();
  console.log(charObj);
  let spinner = `<i class="fas fa-spinner fa-spin fa-8x" id="spinner"></i>`;
  heroCard.innerHTML = spinner;
  const homeWorld = await (
    await fetch(`${charObj.result.properties.homeworld}`)
  ).json();
  const para = document.createElement("p");
  heroCard.innerHTML = `<h1>${charObj.result.properties.name}</h1>Height: &nbsp${charObj.result.properties.height}<br>
  Gender: &nbsp ${charObj.result.properties.gender}<br>
  Birth Year: &nbsp${charObj.result.properties.birth_year}<br>
  Home World: &nbsp${homeWorld.result.properties.name}`;
}
