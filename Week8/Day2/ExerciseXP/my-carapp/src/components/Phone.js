import React, { Component } from "react";
class Phone extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <>
        <h1>`my phone is a {this.state.brand}`</h1>
        <h4>
          {" "}
          ` it is a {this.state.color} {this.state.model} from {this.state.year}
          `
        </h4>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Phone;

// In the Phone component create a function named changeColor that updates the color property to ‘blue’

// In the render() method of the Phone component, add a button with an onClick event that will call the changeColor function to change the color property.
