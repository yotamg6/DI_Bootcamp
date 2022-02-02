// const exp = require("express");
// const app = exp();
// const env = require("dotenv");

// app.use(exp.urlencoded());
// app.use(exp.json());

// const dvdRent = require("./modules/db");
// env.config();

// app.listen(process.env.PORT, console.log(`listening to ${process.env.PORT}`));

// app.use("/", exp.static(__dirname + "/public"));
// app.get("/about", (req, res) => {
//   res.sendFile(__dirname + "/public/about.html");
// });

// app.get("/welcome", (req, res) => {
//   res.redirect("/home");
// });
// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/customers", (req, res) => {
//   dvdRent
//     .getCustomers()
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });

// app.use("/", exp.static(__dirname + "/public"));

// app.get("/customer", (req, res) => {
//   console.log("query:", req.query);
//   dvdRent
//     .getCustomer(req.query.cid)
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });

// app.get("/customer/:id", (req, res) => {
//   console.log(req.params);
//   dvdRent
//     .getCustomer(req.params.id)
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });

// app.post("/customer", (req, res) => {
//   console.log("body:", req.body);
//   dvdRent
//     .getCustomer(req.body.cid)
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });

// app.post("/address", (req, res) => {
//   console.log("body:", req.body);
//   dvdRent
//     .getAddress(req.body.cid)
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });
