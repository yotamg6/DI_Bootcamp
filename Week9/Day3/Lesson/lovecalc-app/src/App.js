import logo from "./logo.svg";
import "./App.css";
import Calc from "./components/Calc";
import Fname from "./components/Calc";
import Sname from "./components/Calc";
import Result from "./components/Result";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      sname: "",
      result: {},
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.sname}&fname=${this.state.fname}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8b0c9f2536mshc8d9eaac0051a02p16281djsnafb9e1c70f62",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ result: data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calc handleClick={this.handleClick} />
          <Fname handleChange={this.handleChange} />
          <Sname handleChange={this.handleChange} />
          <Result result={this.state.result} />
        </header>
      </div>
    );
  }
}

export default App;
