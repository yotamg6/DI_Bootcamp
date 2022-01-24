import React, { Component } from "react";
import Garage from "./Garage";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      size: "small",
    };
  }
  render() {
    return (
      <>
        <header>
          This car is a {this.state.color} {this.props.carinfo.model}
        </header>
        <Garage obj={this.state}></Garage>
      </>
    );
  }
}

export default Car;
