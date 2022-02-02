const custSelect = document.createElement("select");
document.body.append(custSelect);

function displayCustomers(arr) {
  arr.forEach((cusObj) => {
    const cusOption = new Option(
      cusObj.first_name + " " + cusObj.last_name,
      cusObj.customer_id
    );
    custSelect.append(cusOption);
  });
}
const btnGet = document.querySelector("#getBtn");
const btnPost = document.querySelector("#postBtn");

btnGet.addEventListener("click", getCustomer);
btnPost.addEventListener("click", getCustomerPost);

function getCustomer() {
  const id = document.getElementById("customerid").value;
  fetch(`http://localhost:8002/customer?cid=${id}`)
    .then((data) => data.json())
    .then((data) => console.log(data));
}

function getCustomerPost() {
  const postId = document.getElementById("customeridpost").value;
  fetch("http://localhost:8002/customer", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ cid: postId }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}

function getCustomerAddress() {
  const addressId = document.getElementById("custAddPost");
  fetch("http://localhost:8002/address", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ cid: addressId }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}

fetch("http://localhost:8002/customers")
  .then((data) => data.json())
  .then((custArr) => displayCustomers(custArr))
  .catch((e) => console.log(e));
