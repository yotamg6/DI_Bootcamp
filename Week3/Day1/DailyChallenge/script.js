// 1.Create an array which value is the planets of the solar system.
// 2.For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3.Each planet should have a different background color. (Hint: add a new class to each planet).
// 4.Finally append each div to the <section> in the HTML (presented below).
// 5.Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const solarPlanets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];
let planetDiv;
for (let planet of solarPlanets) {
  console.log(planet);
  planetDiv = document.createElement("div");
  const planetText = document.createTextNode(planet);
  planetDiv.appendChild(planetText);
  planetDiv.classList.add("planet");
  planetDiv.classList.add(planet);
  console.log(planetDiv);
  const section = document.querySelector("section");
  section.appendChild(planetDiv);
}
