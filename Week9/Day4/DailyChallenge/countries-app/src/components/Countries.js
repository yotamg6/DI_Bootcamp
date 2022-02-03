import React from "react";
import { connect } from "react-redux";
import { fetchCountries, fetchCities } from "../redux/actions";
class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      cities: [],
    };
  }

  // handleChange = (e) => {
  //   console.log(e.target.value);
  //   fetch(`http://localhost:4000/cities/${e.target.value}`)
  //     .then((resp) => resp.json())
  //     // .then((data) => console.log(data))
  //     .then((data) => this.setState({ cities: data }))
  //     .catch((e) => console.log("cities fetch error:", e));
  // };

  componentDidMount = () => {
    this.props.fetchCountries();
  };

  // componentDidMount = ()=> {
  //   fetch("http://localhost:4000/countries")
  //     .then((resp) => resp.json())
  //     .then((data) => this.setState({ countries: data }))
  //     .catch((e) => console.log("countries fetch error:", e));
  // }
  render() {
    const { countries, cities } = this.props;

    return (
      <>
        <select onChange={this.props.handleChange}>
          <option value="-1">Please select a country</option>
          {countries.map((country, i) => {
            return (
              <option key={i} value={country.country_id}>
                {country.country}
              </option>
            );
          })}
        </select>
        <select>
          {cities.map((city, i) => {
            return (
              <option key={i} value={city.city_id}>
                {city.city}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    cities: state.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
    handleChange: (e) => dispatch(fetchCities(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
// export default Countries;

// {
/* <select>
{cities.map((city, i) => {
  return (
    <option key={i} value={city_id}>
      {city.city}
    </option>
  );
})}
</select> */
// }
