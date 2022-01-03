// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 1. Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  //   console.log(xhr.response.data);
};

// Exercise 2 : Giphy API

// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

let xhr2 = new XMLHttpRequest();

xhr2.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&rating=g&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);
xhr2.responseType = "json";
xhr2.send();
xhr2.onload = function () {
  console.log(xhr2.response.data);
};
