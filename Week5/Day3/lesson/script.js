// EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")

function isString(param) {
  let isString = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof param !== "string") {
        reject(param);
      } else {
        const newStr = param.toUpperCase();
        resolve(newStr);
      }
    }, 5000);
  });
  return isString;
}

isString(123)
  .then((newStr) => console.log(newStr, newStr))
  .catch((error) => console.log(`${error} is not a string`))
  .finally(() => console.log("congratulations"));

//   # Exercise
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// fetch(
//   "https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
// )
//   .then((result) => result.json())
//   .then((dataObj) => {
//     console.log(dataObj);
//     displayGif(dataObj);
//   });

function displayGif(dataObj) {
  const gifDiv = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", dataObj.data.images.original.url);
  gifDiv.append(image);
  document.body.append(gifDiv);
}

fetch("http://random-word-api.herokuapp.com/word?number=1")
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    displayWordWithGif(data);
  });
function displayWordWithGif(word) {
  fetch(
    `https://api.giphy.com/v1/gifs/random?tag=%22${word}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  )
    .then((result) => result.json())
    .then((dataObj) => {
      console.log(dataObj);
      displayGif(dataObj);
    })
    .catch((word) => displayError(word));
}

function displayError(error) {
  const errorImage = document.createElement("img");
  errorImage.setAttribute(
    "src",
    "https://cdn.dribbble.com/users/20580/screenshots/1276530/artisan-errors.gif"
  );
  document.body.append(errorImage);
}

// # Part III
// If the giphy API doesn't find a gif depending on the word (because the word can be strange),then instead of displaying an empty image, display a gif that says "404 ERROR"
