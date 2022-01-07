const parsed = await supportCur.json();
//   console.log(parsed);
//   const listCurFromUsd = parsed["quotes"];
//   console.log(listCurFromUsd);
//   const curKeys = Object.keys(listCurFromUsd);
//   curKeys.map((key, i, arr) => (arr[i] = key.slice(3)));
//   const promises = [];
//   for (let cc of curKeys) {
//     let countryFetched = await fetch(
//       `http://api.countrylayer.com/v2/currency/${cc}?access_key=b8919a78b2890ff18bbf8016aa14f93d`
//     );
//     let country = await countryFetched.json();
//     console.log(country);
// promises.push;
//   }
//   const curCountry = curKeys.forEach((code, i, arr) => {
//     arr[
//       i
//     ] = `http://api.countrylayer.com/v2/currency/${code}?access_key=b8919a78b2890ff18bbf8016aa14f93d`;
//     let response = fetch(arr[i]);
//     // let names = response.json();
//     promises.push(response);
//   });
//   const onePromise = await Promise.all(promises);
//   console.log(onePromise);

//   console.log(curCountry);
//   const curNames = await (
//     await fetch(
//       "http://api.countrylayer.com/v2/currency/eur?access_key=b8919a78b2890ff18bbf8016aa14f93d"
//     )
//   ).json();
//   console.log(curNames);

//   const parsed = await supportCur.json();
//   console.log(parsed);
//   const listCurFromUsd = parsed["quotes"];
//   console.log(listCurFromUsd);
//   const curKeys = Object.keys(listCurFromUsd);
//   curKeys.map((key, i, arr) => (arr[i] = key.slice(3)));
//   const curCountry = curKeys.map((code, i, arr) => {
//     arr[i] = await fetch(
//       `http://api.countrylayer.com/v2/currency/${code}?access_key=b8919a78b2890ff18bbf8016aa14f93d`
//     );
//   });
//   console.log(curCountry);
