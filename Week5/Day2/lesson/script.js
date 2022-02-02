// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// function divide(numerator, denominator) {
//   try {
//     if (denominator !== 0) return numerator / denominator;
//     else {
//       throw new Error("Attempted to divide by zero");
//     }
//   } catch (err) {
//     document.body.textContent = err.message;
//   }
// }

// divide(2, 0);

// # AJAX
// - Make an HTTP request using the GET METHOD on this API:
// https://jsonplaceholder.typicode.com/users
// - Use the method onload, onprogress, onerror
// - If there is no error, display on the page the name, email, city of the 3 first users

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.responseType = "json";
xhr.send();

xhr.onprogress = function () {
  //   console.log("progress", xhr);
};

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log("error");
  } else {
    console.log(xhr);
    for (let i = 0; i < 3; i++) {
      let userName = xhr.response[i].name;
      let userEmail = xhr.response[i].email;
      let userCity = xhr.response[i].address.city;
      const userDiv = document.createElement("div");
      document.body.append(userDiv);
      const paraName = document.createElement("p");
      const paraEmail = document.createElement("p");
      const paraCity = document.createElement("p");
      const textName = document.createTextNode(userName);
      const textEmail = document.createTextNode(userEmail);
      const textCity = document.createTextNode(userCity);
      paraName.append(textName);
      paraEmail.append(textEmail);
      paraCity.append(textCity);
      userDiv.append(paraName, paraEmail, paraCity);
    }
    // const user1 = xhr.response[0].name;
    // const user1Email = xhr.response[0].email;
    // const user1City = xhr.response[0].address.city;
    // console.log(user1City);
    // const user2 = xhr.response[1].name;
    // const user2 = xhr.response[1].name;
    // const user2 = xhr.response[1].name;
    // const user3 = xhr.response[2].name;
    // const user3 = xhr.response[2].name;
    // const user3 = xhr.response[2].name;
    // xhr.response.forEach((user) => {
    //     const userDiv = document.createElement('div')
    //     const
    //     document.body.textContent = user.name
    // });
  }
};

xhr.onerror = function () {
  document.body.textContent = `Error code: ${xhr.status}`;
};
