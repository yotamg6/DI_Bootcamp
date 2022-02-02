import React from "react";
class Lname extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="sname"
          placeholder="last name"
          onChange={this.props.handleChange}
        ></input>
      </div>
    );
  }
}

export default Lname;
