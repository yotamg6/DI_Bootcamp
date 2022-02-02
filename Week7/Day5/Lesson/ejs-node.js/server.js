const exp = require("express");
const env = require("dotenv");
const cors = require("cors");

const app = exp();
env.config();
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.render("about");
});

app.listen(
  (process.env.PORT,
  () => {
    console.log(`listening to ${process.env.PORT}`);
  })
);
