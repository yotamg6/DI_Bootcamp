const getCountries = (db) => {
  return db("country").select("country_id", "country");
};
module.exports = {
  getCountries,
};
