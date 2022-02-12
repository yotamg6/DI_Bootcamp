import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./landStyle.css";

const MovieCard = (props) => {
  const id = useParams().imdbID;

  useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);

  const movie = props.movie;

  return (
    <>
      <div className="page">
        <div className="imgCont">
          <img className="detailsImg" src={movie.Poster}></img>
        </div>
        <div className="detailsCont">
          <h1>{movie.Title}</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movie.Released}
            </li>{" "}
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </li>{" "}
            <li className="list-group-item">
              <strong>Director:</strong> {movie.Director}
            </li>{" "}
            <li className="list-group-item">
              <strong>Writer:</strong> {movie.Writer}
            </li>{" "}
            <li className="list-group-item">
              <strong>Actors:</strong> {movie.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="about">
        <h3>Plot </h3>
        <p>{movie.Plot}</p>
        <a className="link" href={`https://www.imdb.com/title/${id}`}>
          View on IMDB
        </a>
      </div>
      <Link className="link" to="/">
        {" "}
        Go Back To Search{" "}
      </Link>
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
