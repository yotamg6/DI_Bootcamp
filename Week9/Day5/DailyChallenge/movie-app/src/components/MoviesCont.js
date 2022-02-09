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
    return (
      <>
        {Search.map((movie, i) => {
          return (
            <div className="containerMovie" key={i}>
              <img src={movie.Poster}></img>
              {/* <Card style={{ width: "10rem", height: "4rem" }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title> */}
              {movie.Title} - {movie.Year}
              {/* </Card.Title> */}
              <Link variant="primary" to={`movie/${movie.imdbID}`}>
                Movie Details{" "}
              </Link>
              {/* </Card.Body>
              </Card> */}
            </div>
          );
        })}
      </>
    );
  } else return <div></div>;
};

{
  /* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.Title} - {movie.Year}</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */
}

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
