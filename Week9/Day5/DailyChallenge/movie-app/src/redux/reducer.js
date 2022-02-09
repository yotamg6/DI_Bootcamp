const initState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};
export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      // console.log(state.text);
      return {
        ...state,
        text: action.payload,
      };
    case "FETCH_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: true,
      };
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "TOGGLE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};
