let initState = {
  currentIndex: -1,
  list: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INSERT":
      return { ...state, list: action.payload };
    case "UPDATE":
      return { ...state, currentIndex: action.payload };
    case "UPDATE-INDEX":
      return { ...state, currentIndex: action.payload };
    case "DELETE":
      return {
        ...state,
        list: state.list.filter((item, i) => i !== action.payload),
      };
    default:
      return { ...state };
  }
};
