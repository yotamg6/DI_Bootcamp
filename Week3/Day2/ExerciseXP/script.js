// Exercise 1 : Change The Article

// 1.Using a DOM property, retrieve the h1 and console.log it.
// 2.Using DOM methods, remove the last paragraph in the <article> tag.
// 3.Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// 4.Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// 5.Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// const h1 = document.querySelector("h1");
// const article = document.querySelector("article");
// lastPara = article.lastElementChild;
// // console.log(lastPara);
// article.removeChild(lastPara);
// const h2 = document.querySelector("h2");
// const BtnToRed = document.createElement("button");
// const btnRedText = document.createTextNode("paint it red");
// BtnToRed.appendChild(btnRedText);
// h2.appendChild(BtnToRed);
// BtnToRed.addEventListener("click", changeBgColor);
// function changeBgColor() {
//   h2.style.backgroundColor = "red";
// }
// const h3 = document.querySelector("h3");
// const BtnHide = document.createElement("button");
// const btnHideText = document.createTextNode("hide text");
// BtnHide.appendChild(btnHideText);
// h3.appendChild(BtnHide);
// BtnHide.addEventListener("click", hide);
// function hide() {
//   h3.style.display = "none";
// }
// const btnBold = document.querySelector("#btnBold");
// btnBold.addEventListener("click", boldAll);

// function boldAll() {
//   article.style.fontWeight = "bold";
// }
// // 6.BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// // 7.BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// h1.addEventListener("mouseover", pixelRandom);

// function pixelRandom() {
//   console.log("hovered!");
//   h1.style.fontSize = `${Math.random() * 100}px`;
// }
// h2.addEventListener("mouseover", fadeOut);

// function fadeOut() {
//   h2.style.visibility = "hidden";
//   h2.style.opacity = 0;
//   h2.style.transition = "visibility 0s 2s, opacity 2s linear";
// }

// Exercise 2 : Work With Forms
// 1.Retrieve the form and console.log it.
// 2.Retrieve the inputs by their id and console.log them.
// 3.Retrieve the inputs by their name attribute and console.log them.
// 4.When the user submits the form (ie. submit event listener)
// - get the values of the input tags,
// - make sure that they are not empty,
// - create an li per input value,
// - then append them to a the <ul class="usersAnswer"></ul>, below the form.
// const form = document.forms[0];
// console.log(form);
// const inputIdFName = form.elements.fname;
// console.log("input id first", inputIdFName);
// const inputIdlName = form.elements.lname;
// console.log("input id last", inputIdlName);
// const inputIdSubmit = form.elements.submit;
// console.log("input id submit", inputIdSubmit);
// const inputNameFirst = form.elements.fname;
// console.log("input name first", inputNameFirst);
// const inputNameLast = form.elements.lname;
// console.log("input name last", inputNameLast);
// form.addEventListener("submit", makeLinks);

// function makeLinks(e) {
//   e.preventDefault();
//   const valueFname = e.target.elements.fname.value;
//   const valueLname = e.target.elements.lname.value;
//   if (valueFname && valueLname) {
//     const liFname = document.createElement("li");
//     const liTextFname = document.createTextNode(valueFname);
//     liFname.appendChild(liTextFname);
//     const liLname = document.createElement("li");
//     const liTextLname = document.createTextNode(valueLname);
//     liLname.appendChild(liTextLname);
//     document.querySelector("ul").append(liFname, liLname);
//   } else return;
// }

// Exercise 3 : Transform The Sentence

// In the JS file:
// 1.Create a global variable named allBoldItems.
// 2.Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// 3.Create a function called highlight() that changes the color of all the bold text to blue.
// 4.Create a function called return_normal() that changes the color of all the bold text back to black.
// 5.Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// let allBoldItems;
// function getBold_items() {
//   allBoldItems = document.querySelectorAll("strong");
// }
// getBold_items();

// function highlight() {
//   for (let i = 0; i < allBoldItems.length; i++)
//     allBoldItems[i].style.color = "blue";
// }

// function return_normal() {
//   for (let i = 0; i < allBoldItems.length; i++)
//     allBoldItems[i].style.color = "black";
// }
// const p = document.querySelector("p");
// p.addEventListener("mouseover", highlight);
// p.addEventListener("mouseout", return_normal);

//Exercice 4 : Volume Of A Sphere

// Write a JavaScript program to calculate the volume of a sphere.

const form = document.forms.MyForm;
form.addEventListener("submit", calcSphereVol);

function calcSphereVol(e) {
  e.preventDefault();
  const radiusValue = e.target.elements.radius.value;
  const sphereVolume = (radiusValue ** 3 * 3.14 * 4) / 3;
  e.target.elements.volume.value = sphereVolume;
}
