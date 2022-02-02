import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
import Child from "./Child";
import {handleMyClick, HandleChangePropOne} from './actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property_one: "propone",
      property_two: "protwo",
    };
  }
  handleChange = (e) => {
    this.setState({ property_one: e.target.value });
  };
  handleClick = () => {
    this.setState({ property_two: this.state.property_one });
  };
  render() {
    console.log(this.props.property_one_from_store);

    return (
      <div className="App">
        <header className="App-header"></header>
        <p>{this.state.property_one}</p>
        <p>{this.state.property_two}</p>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Change prop two</button>
        <Child />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    property_one_from_store: state.property_one,
    property_two:state.property_two
  };
};
const mapDispatchToProps = () => {
  return {
    handleChange = (dispatch)=> {
        myHandleChange: (e) => dispatch(HandleChangePropOne(e.target.value))
        myHandleClick: (val) => dispatch(handleMyClick(val))
    }
      
    }
  };

// const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
