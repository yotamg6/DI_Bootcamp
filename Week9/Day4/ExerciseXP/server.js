const exp = require("express");
const app = exp();
const knex = require("knex");
const cList = require("./modules/db");
const env = require("dotenv");

env.config();

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

app.listen(4000, console.log("listening from 4000"));

app.get("/countries", (req, res) => {
  cList
    .getCountries(db)
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
});

app.get("/cities/:countryId", (req, res) => {
  console.log("req.params:", req.params);
  cList.getCities(db, req.params.countryId).then((data) => res.json(data));
});
