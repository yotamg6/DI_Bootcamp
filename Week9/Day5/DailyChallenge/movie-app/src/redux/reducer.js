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
      console.log("fetchmovies:", action.payloadLoading);
      return {
        ...state,
        movies: action.payload,
        loading: action.payloadLoading,
      };
    case "LOADING_MOVIE":
      console.log("loadingMovie:", action.payload);
      return {
        ...state,
        loading: action.payload,
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
