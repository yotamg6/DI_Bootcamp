// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "foo");
});
// expected output: Array [3, 42, "foo"]
async function getOnePromise(pro1, pro2, pro3) {
  const onePromise = await Promise.all([pro1, pro2, pro3]);
  console.log(onePromise);
}
getOnePromise(promise1, promise2, promise3);
