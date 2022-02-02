const exp = require("express");
const app = exp();
const env = require("dotenv");
const dvdRental = require("./modules/db");

env.config();

app.use(exp.urlencoded());
app.use(exp.json());

app.listen(process.env.PORT, console.log(`listening on ${process.env.PORT}`));

app.use("/", exp.static(__dirname + "/public"));

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/welcome", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/customers", (req, res) => {
  dvdRental
    .getAllCustomers()
    .then((resp) => res.json(resp))
    .catch((e) => console.log(e));
});

app.get("/customer", (req, res) => {
  console.log("query:", req.query);
  dvdRental
    .getCustomer(req.query.cid)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

app.post("/customer", (req, res) => {
  console.log(req.body);
  dvdRental
    .getCustomer(req.body.cid)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});
