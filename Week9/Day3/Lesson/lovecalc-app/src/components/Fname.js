import React from "react";
class Fname extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="fname"
          placeholder="first name"
          onChange={this.props.handleChange}
        ></input>
      </div>
    );
  }
}

export default Fname;
