function fetchUserLogin() {
  console.log("clicked");
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5010/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    // .then((data) => greetUser(data, userName, password))
    .catch((e) => console.log(e));
}
