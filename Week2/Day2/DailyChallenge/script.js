//Daily Cahllenge
// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
// 2.Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
// 3.Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
let sentence = "The movie is not that bad, I like it";
const sentenceArr = sentence.replaceAll(",", " ").split(" ");
console.log(sentenceArr);

const wordNot = sentenceArr.indexOf("not");
console.log(wordNot);
const wordBad = sentenceArr.indexOf("bad");
console.log(wordBad);

if (wordBad > wordNot) {
  const spanDelete = wordBad - wordNot + 1;
  sentenceArr.splice(wordNot, spanDelete, "good");
  console.log(sentenceArr);
  //three options to remove the extra space after 'good':
  //option 1.
  // commaIndex = sentenceArr.indexOf("");
  // sentenceArr.splice(commaIndex, 1);
  // console.log(sentenceArr);
  // const finalString = sentenceArr.join(" ");
  //option 2.
  // const finalString = sentenceArr.join(" ").replace(/\s+/g, " ");//with this option I wasn't able to repace the extra space with a comma
  //option 3. replaced the extra space with a comma
  const finalString = sentenceArr.join(" ").replace("  ", ", ");
  console.log(finalString);
} else console.log(sentence);
