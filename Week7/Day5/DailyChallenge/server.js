const exp = require("express");
const fs = require("fs");
const app = exp();

app.use(exp.urlencoded());
app.use(exp.json());

app.listen(5010, () => console.log("listening on 5010"));

app.use("/", exp.static(__dirname + "/public"));
// app.use("/login", (req, res) => {
//   res.sendFile("./login");
// });

// const path = require("path");
// app.use("/static", exp.static(path.join(__dirname, "public/login.html")));

const data = fs.readFileSync("./data.json");
const userArr = JSON.parse(data);

app.post("/register", (req, res) => {
  if (userExist(req.body.userName)) {
    res.json({ message: "User allready exists" });
  } else {
    userArr.push(req.body);
    fs.writeFile("./data.json", JSON.stringify(userArr), (err) => {
      res.json({ message: "Hello! your account is now created" });
    });
  }
});

const userExist = (username) => {
  return userArr.find((item) => item.userName == username);
};

// app.post("/register", (req, res) => {
//   console.log(req.body.fname);
//   fs.readFile("./data.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (
//         data.toString().includes(req.body.userName) ||
//         data.toString().includes(req.body.password)
//       ) {
//         res.send("User allready exists");
//         console.log("User allready exists");
//       } else {
//         res.send("Hello! your account is now created");
//         fs.appendFile("./data.json", JSON.stringify(req.body), (err) => {
//           if (err) console.log(err);
//           else console.log("all good");
//         });
//       }
//     }
//   });
// });

app.post("/login", (req, res) => {
  console.log("received request");
  console.log(req.body);
  fs.readFile("users", (err, data) => {
    if (err) {
      console.log("err reading file loging", err);
    } else {
      if (
        data.toString().includes(`${req.body.username} ${req.body.password}`)
      ) {
        console.log(`Hey ${req.body.username} welcome back`);
        res.json(`Hey ${req.body.username} welcome back`);
      } else {
        console.log("Username is not registred");
        res.json("Username is not registred");
      }
    }
  });
});

// });

// const userArr = [];
// let isUser;
// app.post("/register", (req, res) => {
//   console.log(req.body.fname);
//   userArr.push(req.body);
//   console.log(userArr);
// isUser = userArr.some((user) => {
//     user.fname == req.body.fname;
//     console.log("isuser:", isUser);
//     isUser ? req.body : userArr.push(req.body);
// })
//   fs.writeFile("./data.json", JSON.stringify(userArr), (err) => {
//     console.log("error:", err);
//   });
//   fs.readFile("./data.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(data.toString());
//     }
//   });
// });

// isUser = userArr.some((user) => {
//     user.fname == req.body.fname;
//     console.log("isuser:", isUser);
//     isUser ? req.body : userArr.push(req.body);
// })

// fs.readFile("./data.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     res.send(data.toString());
//   }
// });
