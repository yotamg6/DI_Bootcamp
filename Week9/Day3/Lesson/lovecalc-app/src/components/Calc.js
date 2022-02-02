import React from "react";
class Calc extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Calculate</button>
      </div>
    );
  }
}

export default Calc;
