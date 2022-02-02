//exe 1.
// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
// const divDom = document.body.children[0];
// console.log("first way div", divDom);
// const divDom2 = document.body.firstElementChild;
// console.log("second way div", divDom2);
// // 2. The ul DOM node?
// const ulDom = document.body.children[1];
// console.log("first way ul", ulDom);
// const ulDom2 = divDom.nextElementSibling;
// console.log("second way ul", ulDom2);
// // 3. The second li (with Pete)?
// const seccondLi = ulDom.children[1];
// console.log("first way pete", seccondLi);
// const seccondLi2 = ulDom.lastElementChild;
// console.log("second way pete", seccondLi2);

//exe 2.
// For each of the questions, find 2 WAYS to access :

// 1. The div node
const divById = document.getElementById("container");
console.log("div by id", divById);
const divByTag = document.getElementsByTagName("div");
console.log("div by tag name", divByTag);
// 2. The ul nodes, and render all of it's children one by one
const ulByClass = document.getElementsByClassName("list");
console.log("ul by class", ulByClass);
const ulByTag = document.getElementsByTagName("ul");
console.log("ul by tag", ulByTag);

for (let list of ulByClass) console.log(list);
// 3. The first li of each ul
for (i = 0; i < ulByClass.length; i++) {
  console.log(ulByClass[0]);
}
//exe 3.
let person = [
  {
    username: "John",
    isSignIn: true,
  },
  {
    username: "Sarah",
    isSignIn: false,
  },
];
// 1.Create an H1 for each person. The H1 should contain the name of the person
// 2. If the user is signedIn -> add a class of "signedIn" where the color of the text is blue
// 3. If the user is NOT signedIn -> add a class of "notSignedIn" where the color of the text is red
const div = document.getElementById("shopping");
for (let obj of person) {
  const newH1 = document.createElement("h1");
  const h1Text = document.createTextNode(obj.username);
  newH1.appendChild(h1Text);
  if (obj.isSignIn) {
    newH1.classList.add("signedIn");
    newH1.style.color = "blue";
  } else {
    newH1.classList.add("notSignedIn");
    newH1.style.color = "red";
  }
  div.appendChild(newH1);
}
