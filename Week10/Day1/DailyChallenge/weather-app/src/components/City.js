import React from "react";
class City extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }
  addCityToFav = (city) => {
    const arr = this.state.favorites;
    arr.push(city);
    this.setState({ favorites: arr });
    localStorage.setItem(
      `favoriteCities`,
      JSON.stringify(this.state.favorites)
    );
  };
  render() {
    console.log(this.state.favorites);
    // console.log(JSON.parse(localStorage.Berlin.main));

    const data = this.props.data;

    if (Object.keys(data).length > 0) {
      return (
        <div>
          <h1>{data.name}</h1>
          <h2>Current temperature: {data.main.temp}</h2>
          <h2>Feels like: {data.main.feels_like}</h2>
          <button onClick={() => this.addCityToFav(data)}>
            Add to your favorites
          </button>
        </div>
      );
    } else return <div></div>;
  }
}

export default City;

//add button that will convert to celsius? or I should send everything through a function?
//add images that match the weather?
