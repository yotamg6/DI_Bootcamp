import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      age: "",
      male: "",
      female: "",
      destination: "",
      nuts: "",
      lactose: "",
      vegan: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? "yes" : e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Form handleChange={this.handleChange} inputVal={this.state} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
