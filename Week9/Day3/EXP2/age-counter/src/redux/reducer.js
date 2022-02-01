const initState = {
  age: 20,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "AGE_UP":
      return { ...state, age: state.age + 1 };
    case "AGE_DOWN":
      return { ...state, age: state.age - 1 };
    default:
      return { ...state };
  }
};
