const logAction = (store) => (next) => (action) => {
  console.log("---In the middleware----");
  next(action);
  console.log(action);
};

export { logAction };
