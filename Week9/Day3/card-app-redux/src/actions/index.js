export const searchItemStore = (value) => {
  return {
    type: "CHANGE",
    payload: value,
  };
};

export const getRobotsInStore = () => (dispatch) => {
  // dispatch({ type: "REQUEST" });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: "FETCH", payload: data }))
    .catch((err) => console.log(err));
};

// export const getRobotsInStore = (data) => {
//   return {
//     type: "FETCH",
//     payload: data,
//   };
// };
