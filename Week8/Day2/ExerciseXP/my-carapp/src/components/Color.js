import React, { Component } from "react";
class Color extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }
  changeFavColor = () => {
    this.setState({ favoriteColor: "yellow" });
  };

  componentDidMount = () => {
    setTimeout(this.changeFavColor, 5000);
  };

  changeColorToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <>
        <header> My favorite color is {this.state.favoriteColor} </header>
        <button onClick={this.changeColorToBlue}>Change Fav color</button>
      </>
    );
  }
}

// Use the componentDidMount() method to call a timeout function, that changes the state of the favoriteColor property to “yellow” after 5 seconds.

export default Color;
