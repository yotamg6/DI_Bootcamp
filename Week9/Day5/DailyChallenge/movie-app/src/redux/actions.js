export const searchMovies = (value) => {
  return {
    type: "SEARCH_MOVIES",
    payload: value,
  };
};

export const fetchMovies = (search) => (dispatch) => {
  dispatch({ type: "LOADING_MOVIE", payload: true });
  fetch(`http://www.omdbapi.com/?s=${search}&apikey=7208f76a
  `)
    .then((resp) => resp.json())
    // .then((data) => console.log(data))
    .then((data) => {
      console.log("fetchMoviesdata:", data);
      dispatch({ type: "FETCH_MOVIES", payloadLoading: false, payload: data });
    })
    .catch((e) => console.log("error:", e));
};

export const fetchMovie = (id) => (dispatch) => {
  fetch(`http://www.omdbapi.com/?i=${id}&apikey=7208f76a
  `)
    .then((resp) => resp.json())
    .then((data) => dispatch({ type: "FETCH_MOVIE", payload: data }))
    .catch((e) => console.log("err:", e));
};

export const toggle = () => {
  return {
    type: "TOGGLE",
  };
};
