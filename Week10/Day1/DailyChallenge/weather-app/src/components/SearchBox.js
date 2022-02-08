import React from "react";
import City from "./City";
class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      city: "",
      data: "",
      isClicked: false,
    };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleClick = () => {
    this.setState({ city: this.state.text, isClicked: true });
  };

  componentDidUpdate() {
    const { city, isClicked } = this.state;

    if (city.length > 1 && isClicked) {
      console.log("from City:", city);
      fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":
              "8b0c9f2536mshc8d9eaac0051a02p16281djsnafb9e1c70f62",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }))
        .catch((err) => {
          console.error(err);
        });
      this.setState({ isClicked: false });
    } else return <div></div>;
  }

  render() {
    const { city, data } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="type in a city name"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>Search</button>
        <City data={data} />
      </div>
    );
  }
}

export default SearchBox;
