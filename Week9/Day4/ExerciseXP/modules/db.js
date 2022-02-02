const getCountries = (db) => {
  return db("country").select("country_id", "country").orderBy("country");
};

const getCities = (db, id) => {
  return db("city").select("city_id", "city").where({ country_id: id });
};

module.exports = {
  getCountries,
  getCities,
};
