// 1.The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// 2.First, you need to fetch all the supported currencies, in order to add the currencies options (ie From - To) in the currency converter. In the Currency Layer API documentation provided above, check out the part : “Supported Currencies“

// 3.To convert from a currency, to another one, you need to fetch the Real-time Rates. In the Currency Layer API documentation provided above, check out the part : “Real-time Rates”. This API will provide data needed to calculate exchange rates between currencies.

// 4.You can use the Rest Countries API to get information about countries via a RESTful API. This API will let you know in which countries you can use the currency that you just converted. Check out the currency part of the documentation
// For this part of the challenge, check out the list of Currency codes ISO 4217

(async function retrieveElements() {
  const currenFetched = await (
    await fetch(
      "http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6"
    )
  ).json();
  const currenCodes = currenFetched.currencies;

  const convForm = document.querySelector("#convert");
  convForm.addEventListener("submit", convert);
  displayCurrencies(currenCodes);
  const froForm = document.querySelector("#froForm");
})();

async function displayCurrencies(codes) {
  const selectFrom = document.querySelector("#from");
  const selectTo = document.querySelector("#to");
  for (let [key, value] of Object.entries(codes)) {
    const optionFro = document.createElement("option");
    const optionTo = document.createElement("option");
    optionFro.textContent = `${key} - ${value}`;
    optionTo.textContent = `${key} - ${value}`;
    selectFrom.append(optionFro);
    selectTo.append(optionTo);
  }
}

async function convert(e) {
  e.preventDefault();
  const amountValue = e.target.elements[0].value;
  const froCur = document.forms[0].elements[0].value;
  const toCur = document.forms[1].elements[0].value;
  const slicedFro = froCur.slice(0, 3);
  const slicedTo = toCur.slice(0, 3);
  //   console.log("froCur:", slicedFro, "toCur:", slicedTo);
  const curLiveFetch = await fetch(
    "http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6"
  );
  const liveParsed = await curLiveFetch.json();
  const fromExchangeRate = liveParsed["quotes"][`USD${slicedFro}`];
  const toExchangeRate = liveParsed["quotes"][`USD${slicedTo}`];
  console.log("from:", fromExchangeRate, "to:", toExchangeRate);
  const result = `${toExchangeRate / fromExchangeRate} ${slicedTo}`;
  console.log(result);
  displayResult(result);
}

function displayResult(result) {
  const resultDiv = document.createElement("div");
  const text = document.createTextNode(result);
  resultDiv.append(text);
  document.body.appendChild(resultDiv);
}
