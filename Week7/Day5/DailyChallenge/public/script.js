// const btn = document.querySelector("button");
// const para = document.createElement("p");
// document.appendChild(para);
// btn.addEventListener("click", function () {});

function greetUser(userArr, userName, password) {
  let isUser = userArr.some((user) => {
    user.userName == userName;
  });
  let isPassword = userArr.some((user) => {
    user.password == password;
  });
  if (isUser || isPassword) para.innerText = "User allready exists";
  else para.innerText = "Registered successfully";
}

function fetchUser() {
  console.log("clicked");
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(fname); //if empty arr, I'll change the ! with ""
  if (!fname || !lname || !email || !userName || !password) {
    console.log("Please fill in all the fields");
  } else {
    console.log("inside the else:", fname);
    fetch("http://localhost:5010/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        userName: userName,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      // .then((data) => greetUser(data, userName, password))
      .catch((e) => console.log(e));
  }
}
