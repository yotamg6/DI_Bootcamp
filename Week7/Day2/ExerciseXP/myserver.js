// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/
const express = require("express");

const app = express();

app.listen(5000, () => console.log("listening to 5000"));
// app.use("/yotam", express.static(__dirname + "/public"));

// app.get("/api/products", (req, res) => {
//   res.send("<h1>Hello</h1> <h2>Hello2</h2> <h3>Hello3</h3>");
// });
// const user = {
//   firstname: "John",
//   lastname: "Doe",
// };
// app.get("/api/products", (req, res) => {
//   res.json(user);
// });

app.get("/", (req, res) => res.send("<h1>Hi</h1> <h2>Hi2</h2>"));
