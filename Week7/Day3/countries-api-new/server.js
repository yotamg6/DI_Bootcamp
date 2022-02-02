// const exp = require("express");
// const app = exp();
// const knex = require("knex");
// const cList = require("./modules/db");

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

// app.listen(4002, console.log("listening from 4002"));

// app.use("/", exp.static(__dirname + "/public"));

// app.get("/countries", (req, res) => {
//   cList
//     .getCountries(db)
//     .then((data) => res.json(data))
//     .catch((e) => console.log(e));
// });
