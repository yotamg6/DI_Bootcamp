// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

function compareToTen(num) {
  const promCompareToTen = new Promise(function (resolve, reject) {
    num > 10
      ? resolve(`${num} is bigger than 10`)
      : reject(`error. ${num} is smaller than 10`);
  });
  return promCompareToTen;
}
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//   Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

setTimeout(function () {
  Promise.resolve("success")
    .then(function (value) {
      console.log(value);
    })
    .catch(() => console.log("Ooops something went wrong"));
}, 4000);

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then(function (value) {
  console.log(value);
});
Promise.reject("Boo!").catch((error) => console.log(error));
