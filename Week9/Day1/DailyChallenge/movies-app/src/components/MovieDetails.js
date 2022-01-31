import React from "react";
import { connect } from "react-redux";

class MovieDetails extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (!this.props.details) {
      return (
        <div>
          <h1>Movie Details</h1>
          <h2>Please click on a movie</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{this.props.details.title}</h3>
          <h3>{this.props.details.releaseDate}</h3>
          <h3>{this.props.details.rating}</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(MovieDetails);
