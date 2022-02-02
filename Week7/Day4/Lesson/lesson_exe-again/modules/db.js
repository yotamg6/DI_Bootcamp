const knex = require("knex");
const env = require("dotenv");

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

function getAllCustomers() {
  return db("customer")
    .select("customer_id", "first_name", "last_name", "email")
    .orderBy("first_name");
}

function getCustomer(id) {
  return db("customer")
    .select("first_name", "last_name", "email", "customer_id")
    .orderBy("first_name")
    .where({ customer_id: id });
}

module.exports = {
  getAllCustomers,
  getCustomer,
};
