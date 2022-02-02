const robot = require("./getRobot");

robot
  .getRobot()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
