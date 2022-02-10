import { connect } from "react-redux";

import { toggle } from "../redux/actions";
import "./landStyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

const MoviesCont = (props) => {
  const { text, movies } = props;
  const { Search } = movies;
  if (Search) {
    if (props.loading) {
      return (
        <>
          <FontAwesomeIcon icon={faSpinner} spin size="6x" />
        </>
      );
    } else {
      return (
        <>
          {Search.map((movie, i) => {
            return (
              <div className="containerMovie" key={i}>
                <img src={movie.Poster}></img>
                {movie.Title} - {movie.Year}
                <Link variant="primary" to={`movie/${movie.imdbID}`}>
                  Movie Details{" "}
                </Link>
              </div>
            );
          })}
        </>
      );
    }
  } else return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    text: state.text,
    movies: state.movies,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoading: () => dispatch(toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCont);
