const selectBox = document.createElement("select");
document.body.append(selectBox);
function displayCountries(countArr) {
  countArr.forEach((country) => {
    const countryOption = new Option(country.country, country.country_id);
    selectBox.append(countryOption);
  });
}

function getCountries() {
  fetch("http://localhost:4002/countries")
    .then((data) => data.json())
    .then((countArr) => displayCountries(countArr));
}

getCountries();
