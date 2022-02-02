const custoSelect = document.createElement("select");
document.body.append(custoSelect);

function displayAllCustomers(arrOfCusto) {
  arrOfCusto.forEach((cusObj) => {
    const custoOption = new Option(
      cusObj.first_name + " " + cusObj.last_name,
      cusObj.customer_id
    );
    custoSelect.append(custoOption);
  });
}

function fetchCustomers() {
  fetch("http://localhost:5010/customers").then((resp) =>
    resp.json().then((custoArr) => displayAllCustomers(custoArr))
  );
}

fetchCustomers();

function fetchOneCustomer() {
  const id = document.getElementById("customerGetId").value;
  fetch(`http://localhost:5010/customer?cid=${id}`)
    .then((data) => data.json())
    .then((customer) => console.log(customer))
    .catch((e) => console.log(e));
}

function fetchCustomerPost() {
  const id = document.getElementById("customerPostId").value;
  fetch("http://localhost:5010/customer", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ cid: id }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
