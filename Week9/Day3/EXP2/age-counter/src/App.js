import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { ageUp, ageDown } from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div>Your age is {props.age}</div>
        <button onClick={props.onAgeUp}>Age Up</button>
        <button onClick={props.onAgeDown}>Age Down</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUp()),
    onAgeDown: () => dispatch(ageDown()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
