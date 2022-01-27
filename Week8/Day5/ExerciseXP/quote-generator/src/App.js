import logo from "./logo.svg";
import "./App.css";
import quotes from "./Quotes.js";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[10],
      length: quotes.length - 1,
      rgb: "",
    };
  }
  // getRanNum = () => {
  //   return Math.floor(Math.random() * quotes.length);
  // };
  getRanColor = () => {
    return `rgb( 
    ${Math.floor(Math.random() * 155)}
    ${Math.floor(Math.random() * 155)}
    ${Math.floor(Math.random() * 155)}
  )`;
  };
  handleClick = () => {
    const ranNum = this.state.length;
    this.setState({
      length: this.state.length - 1,
      quote: quotes[ranNum],
      rgb: this.getRanColor(),
    });
  };
  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{ backgroundColor: this.state.rgb }}
        >
          <div
            style={{
              backgroundColor: this.getRanColor(),
              width: 300,
              border: "1px solid",
            }}
          >
            {" "}
            {this.state.quote.quote} {this.state.quote.author}
          </div>
          <button
            style={{ backgroundColor: this.getRanColor() }}
            onClick={this.handleClick}
          >
            Get a quote
          </button>
        </header>
      </div>
    );
  }
}

export default App;
