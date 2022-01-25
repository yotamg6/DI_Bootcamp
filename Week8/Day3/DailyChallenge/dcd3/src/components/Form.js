import React from "react";

class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="fname"
            placeholder="First Name"
          ></input>
        </div>
        <div>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="lname"
            placeholder="Last Name"
          ></input>
        </div>
        <div>
          <input
            onChange={this.props.handleChange}
            type="text"
            name="age"
            placeholder="Age"
          ></input>
        </div>
        <div>
          <label>Male</label>
          <input
            onChange={this.props.handleChange}
            type="checkbox"
            name="male"
          ></input>
          <label>Female</label>
          <input
            onChange={this.props.handleChange}
            type="checkbox"
            name="female"
          ></input>
        </div>
        <strong>Select your destination</strong>
        <br />
        <select onChange={this.props.handleChange}>
          <option value="armenia">Armenia</option>
          <option value="belgium">Belgium</option>
          <option value="canada">Canada</option>
          <option value="denmark">Denmark</option>
          <option value="england">England</option>
        </select>
        <div>
          <strong>Dietary Restrictions</strong>
          <br />
          <label>Nuts Free</label>
          <input
            onChange={this.props.handleChange}
            type="checkbox"
            name="nuts"
            checked={this.props.nuts}
          ></input>
          <label>Lactose Free</label>
          <input
            onChange={this.props.handleChange}
            type="checkbox"
            name="lactose"
            checked={this.props.lactose}
          ></input>
          <label>Vegan</label>
          <input
            onChange={this.props.handleChange}
            type="checkbox"
            name="vegan"
            checked={this.props.vegan}
          ></input>
          <br />
          <br />
          Your name: {this.props.inputVal.fname} {this.props.inputVal.lname}
          <br />
          Your age: {this.props.inputVal.age}
          <br />
          Your gender: {this.props.inputVal.gender}
          <br />
          Your destination: {this.props.inputVal.destination}
        </div>
        <br />
        Your dietary restrictions:
        <br />
        **Nuts free: {this.props.inputVal.nuts}
        <br />
      </>
    );
  }
}

export default Form;
