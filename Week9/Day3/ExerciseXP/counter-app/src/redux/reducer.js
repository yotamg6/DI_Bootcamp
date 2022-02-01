let initState = {
  counter: 0,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
};
