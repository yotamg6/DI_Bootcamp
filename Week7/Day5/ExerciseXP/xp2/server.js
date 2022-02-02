const exp = require("express");
const axios = require("axios");
const env = require("dotenv");
// const cors = require("cors");//doesn't let me render anything
// app.use(cors);//moved it here after commenting-out
let Parser = require("rss-parser");
let parser = new Parser();

const app = exp();

app.use(exp.urlencoded());
app.use(exp.json());

env.config();

app.set("view engine", "ejs");

const rss = async () => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  //   console.log("website title:", feed.title);
  //   console.log("items:", feed.items);
  feed.items.forEach((item) => {
    console.log(item.title + ":" + item.link);
  });
  return feed;
};
rss().then((data) => console.log(data));
const items = feed.items;
app.get("/posts", (req, res) => {
  res.render("partials/posts", { posts: items });
});
app.get("/search", (req, res) => {
  res.render("pages/search", { posts: items });
});

app.get("/home", (req, res) => {
  res.render("pages/index");
});

app.post("search/title", (req, res) => {
  console.log(req.body);
  const chosTitle = req.body;
  res.render("pages/search", { title: chosTitle });
});

app.post("search/category", (req, res) => {
  console.log(req.body);
  const chosCategory = req.body;
  res.render("pages/search", { category: chosCategory });
});

app.listen(process.env.PORT, () =>
  console.log(`listening to ${process.env.PORT}`)
);
