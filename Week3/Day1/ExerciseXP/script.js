// Exercise 1 : Change The Navbar
// Instructions
// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
// document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");
// const newList = document.createElement("li");
// const newText = document.createTextNode("Logout");
// newList.appendChild(newText);

// // const ul = document.getElementsByTagName("ul");
// // console.log(ul);
// // ul[0].appendChild(newList);
// // console.log(ul);
// const ulQuery = document.querySelector("ul");
// ulQuery.appendChild(newList);

// const texFirstLi = ulQuery.firstElementChild.textContent;
// console.log("first link:", texFirstLi);
// const textLastLi = ulQuery.lastElementChild.textContent;
// console.log("last link:", textLastLi);

//exe 2. : Users
// Instructions
// 1.In the HTML above change the name “Pete” to “Richard”.
// 2.Change each first name of the two <ul>'s to your name.
// 3.At the end of each <ul> add a <li> that says “Hey students”.
// 4.Delete the name Sarah from the second <ul>.
// 5.Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
//1.
// const firstUl = document.querySelector(".list");
// console.log(firstUl);
// console.log("second list:", firstUl.children[1]);
// const peteToRichard = (firstUl.children[1].textContent = "Richard");
// console.log(peteToRichard);
// //2.
// const allUls = document.querySelectorAll(".list");
// console.log(allUls);
// for (let elem of allUls) {
//   elem.children[0].textContent = "Yotam";
//   const newLink = document.createElement("li");
//   const newTextforLink = document.createTextNode("Hey students");
//   newLink.appendChild(newTextforLink);
//   elem.appendChild(newLink);
//   elem.classList.add("student_list");
// }

// //4.
// const secondUl = allUls[1];
// const sarahLi = secondUl.children[1];
// secondUl.removeChild(sarahLi);
// console.log(secondUl);
// //5.//second half
// firstUl.classList.add("university", "attendance");
// console.log(firstUl);
///////////////
//Exercise 3 : Users And Style

// 1.Add a “light blue” background color and some padding to the <div>.
// 2.Do not display the first name (John) in the list.
// 3.Add a border to the second name (Pete).
// 4.Change the font size of the whole body.
// 5.Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
const divSelected = document.querySelector("div");
divSelected.style.backgroundColor = "lightblue";
const johnElement = divSelected.nextElementSibling.children[0];
document.querySelector("ul").removeChild(johnElement);
const peteElement = document.querySelector("li");
peteElement.style.border = "1px solid black";
document.body.style.fontSize = "30px";

if (divSelected.style.backgroundColor === "lightblue") {
  alert(`Hello ${document.querySelector("li").textContent}`);
}
