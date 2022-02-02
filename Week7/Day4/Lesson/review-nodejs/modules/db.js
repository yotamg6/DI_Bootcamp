const knex = require("knex");
const env = require("dotenv");
env.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

const getCustomers = () => {
  return db("customer")
    .select("customer_id", "first_name", "last_name", "email")
    .orderBy("first_name");
};

const getCustomer = (id) => {
  return db("customer")
    .select("customer_id", "first_name", "last_name", "email")
    .where({ customer_id: id });
};

module.exports = {
  getCustomers,
  getCustomer,
};
