// 1. In the HTML file, create a form containing 2 inputs, username and password. The ACTION SHOULD BE index.html WITH GET REQUEST
// 2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page
const formUserName = document.forms[0];

formUserName.addEventListener("submit", validData);

function validData(e) {
  const valueUserName = e.target.elements.username.value;
  console.log(valueUserName);
  const userNameprocessed =
    valueUserName[0].toUpperCase() + valueUserName.slice(1).replaceAll(" ", "");
  console.log(userNameprocessed);
  const password = e.target.elements.password.value;
  if (userNameprocessed.length < 4 || password == "") {
    e.preventDefault();
    document.body.style.backgroundColor = "red";
  } else {
    const urlSearchParamsObj = new URLSearchParams(window.location.search);
    for (let [key, value] of urlSearchParamsObj.entries()) {
      const para = document.createElement("p");
      para.textContent = `${key}:${value}`;
      document.body.append(para);
    }
  }
}

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`;

const objJs = JSON.parse(jsonString);
let {
  quiz: {
    sport: {
      q1: {
        options: [a, b, c, d],
      },
    },
  },
} = objJs;
console.log(a, b, c, d);

const jsonStr = JSON.stringify(objJs, null, 2);
// const jsonStr = JSON.stringify(objJs);
console.log(jsonStr);

// # Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object.
// Console.log the variable
// 4.  Then use pretty print (look at the lesson)
