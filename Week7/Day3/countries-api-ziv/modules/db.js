const getCountries = (db) => {
  return db("country").select("country_id", "country");
};

const getCities = (db) => {
  return db("city").select("city_id", "city");
};

module.exports = {
  getCountries,
  getCities,
};
