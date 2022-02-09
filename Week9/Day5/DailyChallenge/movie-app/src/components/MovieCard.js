import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieCard = (props) => {
  const id = useParams().imdbID;

  useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);

  const movie = props.movie;
  return (
    <>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster}></img>
      <ul>
        <li>
          <strong>Genre:</strong> {movie.Genre}
        </li>
        <li>
          <strong>Released:</strong> {movie.Released}
        </li>{" "}
        <li>
          <strong>IMDB Rating:</strong> {movie.Rating}
        </li>{" "}
        <li>
          <strong>Director:</strong> {movie.Director}
        </li>{" "}
        <li>
          <strong>Writer:</strong> {movie.Writer}
        </li>{" "}
        <li>
          <strong>Actors:</strong> {movie.Actors}
        </li>
      </ul>
      <Link to="/"> Go Back To Search </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (id) => dispatch(fetchMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
