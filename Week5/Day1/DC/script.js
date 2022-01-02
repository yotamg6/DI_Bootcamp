// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:
const urlSearchParams = new URLSearchParams(window.location.search);
let paramsObj = {};
for (const [key, value] of urlSearchParams.entries()) {
  paramsObj[key] = value;
}
const searchParamsJson = JSON.stringify(paramsObj);
console.log(searchParamsJson);
