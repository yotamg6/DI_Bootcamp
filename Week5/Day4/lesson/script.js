// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

async function isString(fame1, fame2) {
  if (typeof fame1 !== "string" && typeof fame2 !== "string")
    throw new Error("not a string");
  return [fame1, fame2];
}
async function nounLength(noun) {
  if (noun.length < 3) throw new Error("noun too short");
  return noun;
}

async function cityCase(city) {
  if (city[0] !== city[0].toUpperCase()) throw new Error("not upper cased");
  return city;
}

async function verbIng(verb) {
  if (!verb.endsWith("ing")) throw new Error("not present progressive");
  return verb;
}

async function createsSentence() {
  const famePeople = await isString("Jerry", "John");
  const noun = await nounLength("charming");
  const city = await cityCase("Paris");
  const verb = await verbIng("playing");
  console.log(
    ` ${noun} ${famePeople[0]} is ${verb} football with ${famePeople[1]} in ${city} `
  );
}

createsSentence();
////
function displayGif(dataObj) {
  const gifDiv = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", dataObj.data.images.original.url);
  gifDiv.append(image);
  document.body.append(gifDiv);
}
async function requestWord() {
  try {
    const fetchWord = await fetch(
      "http://random-word-api.herokuapp.com/word?number=1"
    );
    if (fetchWord.status === 200) {
      const dataParsed = await fetchWord.json();
      displayWordWithGif(dataParsed);
    } else throw new Error("error.request not found");
  } catch {
    console.log("error.can not request");
  }
}

async function displayWordWithGif(word) {
  try {
    const fetchedGif = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=%22${word}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    if (fetchedGif.status === 200) {
      const gifParsed = await fetchedGif.json();
      displayGif(gifParsed);
    } else throw new Error("error. gif request not found");
  } catch {
    console.log(`${word}.error. can not display`);
  }
}

function displayError(error) {
  const errorImage = document.createElement("img");
  errorImage.setAttribute(
    "src",
    "https://cdn.dribbble.com/users/20580/screenshots/1276530/artisan-errors.gif"
  );
  document.body.append(errorImage);
}

requestWord();

////////exe 3 at class
let btn = document.getElementById("btn");
btn.addEventListener("click", requestData);

async function requestData() {
  try {
    // const url1 = "https://jsonplaceholder.typicode.com/users/1";
    // const url2 = "https://jsonplaceholder.typicode.com/users/2";
    // const fetch1 = await fetch(url1);
    // const fetch2 = await fetch(url2);
    const url1 = fetch("https://jsonplaceholder.typicode.com/users/1");
    const url2 = fetch("https://jsonplaceholder.typicode.com/users/2");
    Promise.all([url1, url2]).then((value) => console.log(value));
    if (fetch1.status === 200 && fetch2.status === 200) {
      const firstUser = await fetch1.json();
      const secondUser = await fetch2.json();

      let resultsDiv = document.getElementById("results");
      let p = document.createElement("p");
      p.textContent = `1st USER : ${firstUser.name} - 2nd USER : ${secondUser.name}`;
      resultsDiv.appendChild(p);
    } else {
      throw new Error("not 200");
    }
  } catch (err) {
    console.log(err);
  }
}
requestData();
