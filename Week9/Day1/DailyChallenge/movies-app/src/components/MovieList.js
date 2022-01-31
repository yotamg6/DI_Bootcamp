import React from "react";
import { connect } from "react-redux";
import { movieDetails } from "../actions/index";

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return this.props.movies.map((movie, i) => {
      return (
        <div key={i}>
          <div>{movie.title}</div>
          <button onClick={() => this.props.getMovieDetails(movie)}>
            Details{" "}
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (movObj) => dispatch(movieDetails(movObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
