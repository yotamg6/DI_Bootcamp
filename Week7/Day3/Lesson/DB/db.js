const knex = require("knex");
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

db("country")
  .select("country_id", "country")
  .where({ country_id: 40 })
  .update({ country: "greenland1" })
  .returning("*")
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
