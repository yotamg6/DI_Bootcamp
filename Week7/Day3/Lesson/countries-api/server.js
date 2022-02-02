// console.log("hello");
const exp = require("express");
const knex = require("knex");
const DB = require("modules/db.js");

const app = exp();
// const db = knex({
//   client: "pg",
//   connection: {
//     host: "127.0.0.1",
//     port: "5432",
//     user: "postgres",
//     password: "yotlearnsJS2021",
//     database: "dvdrental",
//   },
// });

app.listen(3001, () => console.log("listening to port 3001"));

// app.get("/countries", (req, res) => {
//   db("country")
//     .select("country_id", "country")
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((e) => console.log(e));
// });

//cleaner with require of the function
app.get("/countries", (req, res) => {
  db.getCountries().then((data) => res.json(data));
});
