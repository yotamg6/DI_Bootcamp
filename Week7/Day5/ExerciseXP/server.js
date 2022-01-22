// Create an HTML file.
// Add a form where you will allow the user to submit a shopping item and an amount.
// Create a js file, where you will have your express server.
// When the form is submitted (ie. the user clicks on the “Submit” button), send the data to the server and save it in a file (ie. save the item to your shopping list).
// After submitting the data, direct the user to a page displaying your shopping list items (including the newly added items).

const exp = require("express");
const app = exp();
const fs = require("fs");

app.listen(5002, console.log("listening on port 5002"));

app.use("/", exp.static(__dirname + "/public"));

const listArr = [];

app.get("/list", (req, res) => {
  //   console.log(req.query);
  listArr.push(req.query);
  //   console.log(listArr);
  fs.writeFile("./listFile", JSON.stringify(listArr), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.use("/shoplist", (req, res) => {
  fs.readFile("./listFile", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.toString());
    }
  });
});

// app.get("/welcome", (req, res) => {
//   res.redirect("/home");
// });

app.get("/my-shopping", (req, res) => {
  res.sendFile(
    fs.readFile("./listFile", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data.toString());
      }
    })
  );
});

// app.get("/list", (req, res) => {
//   console.log(req.query);

//   //   res.send(arr);
//   fs.writeFile(
//     "./listFile",
//     JSON.stringify(req.query),
//     { flag: "a" },
//     (err) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// });

// let listArr = [];

// app.use("/shoplist", (req, res) => {
//   fs.readFile("./listfile", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       listArr.push(data.toString());
//       res.send(listArr);
//     }
//   });
// });

// app.use(exp.urlencoded());
// // app.use(exp.json());
// app.listen(5002, console.log("listening on port 5002"));

// app.use("/", exp.static(__dirname + "/public"));
// let list = fs.readFileSync("./listFile.json");
// let listArr = [];
// listArr.push(JSON.stringify(list));
// // let data = JSON.stringify(listArr);
// // console.log(data);

// app.get("/list", (req, res) => {
//   console.log(req.query);

//   listArr.push(req.query);
//   //   res.send(data);
//   fs.writeFile("./listFile.json", JSON.stringify(listArr), (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// app.use("/shoplist", (req, res) => res.send(JSON.stringify(list)));

// let arr = [];

// app.get("/list", (req, res) => {
//   console.log(req.query);
//   arr.push(req.query);
//   res.send(arr);
//   fs.writeFile("./list_array", JSON.stringify(arr), (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// const parsedList = list.toString();
// console.log(parsedList);

// app.use("/shoplist", (req, res) => res.send(parsedList));

// app.use("/", (req, res) => {
//   fs.readFile("./list_array", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else res.send(data.toString());
//   });
// });

// const arrList = [];

// arrList.push(itemAmount);

// fs.writeFile("list_array", JSON.stringify(arrList), (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// const form = document.getElementById("shopForm");
// form.addEventListener("submit", saveInputToFile);

///write to a file. second argument overright the contents of the file specified in the writeFile
// let txt = "hello nodejs";
// fs.writeFile("./hello.txt", txt, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.writeFile("/list_array", parsedList, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// function saveInputToFile() {
//   const itemVal = document.getElementById("shoItem").value;
//   const amountVal = document.getElementById("amount").value;
//   const itemAmount = `${itemVal} : ${amountVal}`;
