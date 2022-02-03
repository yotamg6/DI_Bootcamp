export const fetchCountries = () => (dispatch) => {
  fetch("http://localhost:4000/countries")
    .then((resp) => resp.json())
    .then((data) => dispatch({ type: "COUNTRIES", payload: data }))
    .catch((e) => console.log("error in the fetchCountries:", e));
};

export const fetchCities = (value) => (dispatch) => {
  fetch(`http://localhost:4000/cities/${value}`)
    .then((resp) => resp.json())
    // .then((data) => console.log(data))
    .then((data) => dispatch({ type: "CITIES", payload: data }))
    .catch((e) => console.log("cities fetch error:", e));
};
