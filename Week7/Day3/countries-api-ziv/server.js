const exp = require("express");
const knex = require("knex");
const DB = require("./modules/db");

const app = exp();

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "yotlearnsJS2021",
    database: "dvdrental",
  },
});

app.use("/", exp.static(__dirname + "/public"));

app.listen(3001, () => {
  console.log("listening to port 3001");
});

app.get("/cities", (req, res) => {
  DB.getCities(db)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

app.get("/countries", (req, res) => {
  DB.getCountries(db)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
