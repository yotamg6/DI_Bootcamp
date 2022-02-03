let initState = {
  arr: [],
  txt: "",
  isFetching: "",
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, txt: action.payload };
    case "REQUEST":
      return { ...state, isFetching: true };
    case "FETCH":
      return { ...state, arr: action.payload, isFetching: false };
    default:
      return { ...state };
  }
};
