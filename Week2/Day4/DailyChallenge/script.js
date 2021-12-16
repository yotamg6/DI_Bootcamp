let longest = 0;

const userWords = prompt("write a few words");
const userWordsArr = userWords.split(",");
console.log(userWordsArr);
for (let word of userWordsArr) {
  if (word.length > longest) longest = word.length;
}
function typeStars() {
  console.log("* ", "*".padEnd(longest, "*"), "*");
}
typeStars();
for (let word of userWordsArr) {
  console.log("* ", word.padEnd(longest, " "), "*");
}
typeStars();

//how to ommit one loop and still log the array elements after I've retrieved the longest word
