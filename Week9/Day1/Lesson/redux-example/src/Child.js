import { connect } from "react-redux";
import Childofchild from "./Childofchild";
const Child = (props) => {
  return (
    <>
      <h2>Child component</h2>
      <h1>{props.property_one_from_store}</h1>
      <Childofchild />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    property_one_from_store: state.property_one,
  };
};

export default connect(mapStateToProps, null)(Child);
