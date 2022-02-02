const { default: axios } = require("axios");

async function getRobot() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getRobot };
