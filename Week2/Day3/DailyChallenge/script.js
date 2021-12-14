// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
let star = "*";
for (let counter = 0; counter < 6; counter++) {
  console.log(star);
  star += "*";
}
let star2 = "";
for (counter = 1; counter < 6; counter++) {
  star2 += "*";
  console.log(star2);
  for (counter = 1; counter < 6; counter++) {
    star2 += "*";
    console.log(star2);
  }
}
