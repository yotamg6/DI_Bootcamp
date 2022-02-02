// get customer in post method
const getCustomerPost = () => {
  const id = document.getElementById("customeridpost").value;
  const obj = {
    cid: id,
  };
  fetch("https://cust-api.herokuapp.com/customer", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ cid: id }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
// get customer in get method
const getCustomer = () => {
  const id = document.getElementById("customerid").value;
  fetch(`https://cust-api.herokuapp.com/customer?cid=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
// get all customers with get method
const getAllCustomers = () => {
  fetch("https://cust-api.herokuapp.com/customers")
    .then((res) => res.json())
    .then((data) => {
      dispalyCustomers(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

getAllCustomers();

const dispalyCustomers = (arr) => {
  const s = document.getElementById("customers_select");
  arr.forEach((item, i) => {
    const o = new Option(
      item.first_name + " " + item.last_name,
      item.customer_id
    );
    s.appendChild(o);
  });
};
