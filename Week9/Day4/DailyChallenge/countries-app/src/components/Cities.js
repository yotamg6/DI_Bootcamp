import React from "react";
import { connect } from "react-redux";
const Cities = (props) => {
  return (
    <select>
      {cities.map((city, i) => {
        return (
          <option key={i} value={city.city_id}>
            {city.city}
          </option>
        );
      })}
    </select>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    cities: state.cities,
  };
};

export default connect(mapStateToProps, null)(Cities);
