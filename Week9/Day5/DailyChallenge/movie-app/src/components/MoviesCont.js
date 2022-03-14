import { connect } from "react-redux";

import { toggle } from "../redux/actions";
import "./landStyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const MoviesCont = (props) => {
  const { movies } = props;
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
              <div className="elem">
                <div className="containerMovie" key={i}>
                  <img src={movie.Poster}></img>
                  <div className="textCont">
                    <p className="title">{movie.Title} </p>
                    <p className="year"> {movie.Year}</p>
                    <Link
                      style={{ color: "blue" }}
                      to={`movie/${movie.imdbID}`}
                    >
                      More Details{" "}
                    </Link>
                  </div>
                </div>
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
