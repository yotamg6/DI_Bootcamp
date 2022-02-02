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
  },
});

const getCustomers = () => {
  return db("customer")
    .select("customer.customer_id", "first_name", "last_name")
    .orderBy("first_name");
};

const getCustomer = (id) => {
  return db("customer")
    .select("first_name", "last_name", "email", "customer_id")
    .where({ customer_id: id });
};

const getAddress = (id) => {
  return db("customer")
    .select("first_name", "last_name", "address", "customer_id")
    .innerJoin("address", "customer.address_id", "address.address_id")
    .where({ address: { addres_id: id } });
};

module.exports = {
  getCustomers,
  getCustomer,
  getAddress,
};
// knex.select(knex.ref("id").withSchema("users")).from < User > "users";
