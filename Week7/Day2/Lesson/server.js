const express = require("express");
const app = express();
const robot = require("./users");
// const chosenRobot = robot.getRobot().then((result) => result);
app.listen(5000, () => console.log("listening to port 5000"));

app.get("/api/users", (req, res) => {
  robot.getRobot().then((result) => res.json(result));
});
