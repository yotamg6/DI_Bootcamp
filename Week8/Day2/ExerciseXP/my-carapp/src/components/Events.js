import React, { Component } from "react";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
  }
  clickMe = () => {
    alert("I was clicked");
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`you pressed the enter key, your input value is ${e.target.value}`);
    } else console.log(e.key);
  };

  toggleValue = () => {
    console.log(this.state.isToggleOn);
    if (this.state.isToggleOn) this.state.isToggleOn = false;
    else this.state.isToggleOn = true;
  };

  render() {
    return (
      <>
        <input
          type="text"
          onKeyPress={this.handleKeyPress}
          placeholder="press the enter key"
        ></input>
        <button onClick={this.clickMe}> click here </button>
        <button onClick={this.toggleValue}>click to toggle</button>
      </>
    );
  }
}

// When you type something in the input field and press the ‘Enter key’, the handleKeyPress function will check if the ‘Enter key’ was pressed and will alert a message with the input text value::

// In the render() method of the Events Class component, create an input tag that has an onKeyPress event handler, that listens to a function called handleKeyPress.
// Create a new Class component named Events.

// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.

// In the render() method, create a button that when clicked on, calls the clickMe function.

export default Events;
