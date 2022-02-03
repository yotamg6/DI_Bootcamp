const initState = {
  countries: [],
  cities: [],
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "COUNTRIES":
      return { ...state, countries: action.payload };
    case "CITIES":
      return { ...state, cities: action.payload };
    default:
      return { ...state };
  }
};
