const btn = document.getElementById("subBtn");
let counter = 0;

function display(arr) {
  arr.forEach((item) => {
    console.log(item);
    const para = document.createElement("p");
    para.innerText = `${item.shoItem}:${item.amount}`;
    document.body.append(para);
  });
}
function fetchQuery() {
  //   const itemVal = document.getElementById("shoItem").value;
  //   const amountVal = document.getElementById("amount").value;
  fetch("http://localhost:5002/shoplist")
    .then((resp) => resp.json())
    .then((data) => display(data))
    .catch((e) => console.log(e));
}

btn.addEventListener("click", function () {
  console.log(counter);
  counter > 0 ? fetchQuery() : counter++;
});

// const form = document.getElementById("shopForm");
// console.log(form);
// form.addEventListener("submit", fetchQuery);

// let itemsArr = [];
// function postFetch() {
//   const itemVal = document.getElementById("shoItem").value;
//   const amountVal = document.getElementById("amount").value;
//   console.log(itemVal);
//   fetch("http://localhost:5002/list", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ item: itemVal, amount: amountVal }),
//   })
//     .then((resp) => resp.json())
//     .then((data) => itemsArr.push(data))
//     .catch((e) => console.log(e));
//   console.log(itemsArr);
// }

// const form = document.getElementById("shopForm");
// form.addEventListener("submit", postFetch);
