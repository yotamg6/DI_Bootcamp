const fs = require("fs");

//read

// fs.readFile("./data", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else console.log(data.toString());
// });

// const f = fs.readFileSync("./data");
// console.log(f.toString());
// console.log('after');

///write to a file. second argument overright the contents of the file specified in the writeFile
// let txt = "hello nodejs";
// fs.writeFile("./hello.txt", txt, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// let users = [
//   {
//     name: "Yot",
//   },
//   { name: "Ziv" },
// ];
// fs.writeFile("./hello.txt", users, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//append. will add a file if the file doesn't exist, and append data to the end of the specified file
// let txt = "helo students";
// fs.appendFile(".abc", txt, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
// //delete
// fs.unlink("./hello", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// //copy
// fs.copyFile('./data', (err))
