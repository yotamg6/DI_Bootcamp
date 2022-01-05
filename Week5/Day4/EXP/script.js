// Exercise 1: Conversion
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//   .then((response) => response.json())
//   .then(console.log);
async function printData() {
  const fetched = await fetch("https://swapi.dev/api/starships/9/");
  const dataParsed = await fetched.json();
  console.log(dataParsed);
}

// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// Analyze the code provided above what will be the outcome?
// calling will be clogged
//resolveAfter will be called. the asyncCall fun will be stopped
//the new Promise will be returned after 2 sec with the return value of 'resolved'
//asyncCall is resumed. let result=resloved
//resolved is clogged
