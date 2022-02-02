// const express = require("express");
// const app = express();

// app.use(express.urlencoded());
// app.use(express.json());

// app.listen(5000, () => console.log("litening to port 5000"));

// app.get("/login", (req, res) => {
//   //   res.json([req.query]);
//   res.send("bla bla bla");
//   res.json({ user: "Ziv" });
// });

// app.get("/login/:id", (req, res) => {
//   console.log(req.params);
//   res.send(`hello ${req.params.id}`);
// });

// app.use("/", express.static(__dirname + "/public"));

// app.get("/welcome", (req, res) => {
//   res.sendFile(__dirname + "/public/about.html");
// });

// app.get("/products", (req, res) => res.redirect("/welcome"));

// app.post("/login", (req, res) => req.body);

// ///same way
// app
//   .route("/login")
//   .get((req, res) => {})
//   .post((req, res) => {});
