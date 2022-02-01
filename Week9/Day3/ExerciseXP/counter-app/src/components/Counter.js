import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decramentCounter } from "../redux/actions";
class Counter extends React.Component {
  constructor() {
    super();
  }
  incrementIfOdd = (counter) => {
    if (counter % 2 !== 0) {
      this.props.increment();
    }
  };

  render() {
    return (
      <div>
        clicked {this.props.counter} times
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={() => this.incrementIfOdd(this.props.counter)}>
          Increment if Odd
        </button>
        <button onClick={() => setTimeout(this.props.increment, 1000)}>
          Increment async
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decramentCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
