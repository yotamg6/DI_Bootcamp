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
function getCountries() {
  return db("country").select("country_id", "country");
}
module.exports = {
  getCountries,
};
