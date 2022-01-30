import React from "react";
import { connect } from "react-redux";
import { increase_count, decrease_count } from "../actions/index";

////how am i connecting the actions and the reduce? is it through the use of props?
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.count}</h1>
          <button onClick={() => this.props.increase_count()}>+</button>
          <button onClick={() => this.props.decrease_count()}>-</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase_count: () => dispatch(increase_count()),
    decrease_count: () => dispatch(decrease_count()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
