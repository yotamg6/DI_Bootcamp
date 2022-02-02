const countryCard = document.createElement("select");
const cityCard = document.createElement("select");
document.body.append(countryCard, cityCard);

function displayCountries(countriesArr) {
  countriesArr.forEach((country) => {
    const countryOption = new Option(country.country, country.country_id);
    countryCard.append(countryOption);
  });
}
function displayCities(citiesArr) {
  citiesArr.forEach((city) => {
    const countryOption = new Option(city.city, city.city_id);
    cityCard.append(countryOption);
  });
}
////tried to do a general one, didn't know how to bypass the key names in the option
// function display(arr) {
//   arr.forEach((item) => {
//     const countryOption = new Option(???);
//     countryCard.append(countryOption);
//   });
// }

function getCountries() {
  fetch("http://localhost:3001/countries")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((countArr) => displayCountries(countArr));
}

getCountries();

function getCities() {
  fetch("http://localhost:3001/cities")
    .then((res) => res.json())
    .then((cityArr) => displayCities(cityArr));
}

getCities();
