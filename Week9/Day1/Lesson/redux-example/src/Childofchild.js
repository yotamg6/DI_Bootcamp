import { connect } from "react-redux";
import React from "react";
class Childofchild extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>childofchild</h2>
        <h1>{this.props.property_one_from_store}</h1>;
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    property_one_from_store: state.property_one,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Childofchild);
