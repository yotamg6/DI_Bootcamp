// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

const xhr = new XMLHttpRequest();
const btnSend = document.querySelector("button");
const btnClear = document.createElement("button");
btnClear.textContent = "Clear All";
document.body.append(btnClear);

btnSend.addEventListener("click", fetchUserGif);

function fetchUserGif(e) {
  e.preventDefault();
  const input = document.getElementById("category").value;
  console.log(input);
  const ranNum = Math.round(Math.random() * 10);
  const catImage = document.createElement("img");
  const catDiv = document.createElement("div");

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";

  btnDelete.addEventListener("click", function () {
    removeGif(catDiv, catImage, btnDelete);
  });

  btnClear.addEventListener("click", function () {
    clearAll(catDiv);
  });

  catDiv.append(catImage, btnDelete);
  document.body.append(catDiv);
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&limit=1&offset=${ranNum}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    catImage.setAttribute("src", xhr.response.data[0].images.original.url);
  };
}

function removeGif(catDiv, catImage, btnDelete) {
  catDiv.removeChild(catImage);
  catDiv.removeChild(btnDelete);
}
function clearAll(catDiv) {
  while (catDiv.firstChild) {
    catDiv.removeChild(catDiv.firstChild);
  }
}
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

// let urlSearchParams = new URLSearchParams(window.location.search); //had issues using this method. It didn't change the value, even if a new one was submitted. I'm also not sure about when to use the action in the form html, and when to use submit in the event handler
