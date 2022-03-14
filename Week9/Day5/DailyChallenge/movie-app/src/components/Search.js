import { connect } from "react-redux";
import { searchMovies, fetchMovies } from "../redux/actions";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./landStyle.css";

const Search = (props) => {
  return (
    <>
      <Card
        className="container"
        style={{
          width: "80rem",
          height: "10rem",
          backgroundColor: "lightgrey",
        }}
      >
        <Card.Body>
          <Card.Title>Search for a Movie/TV Series...</Card.Title>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" />
          <input type="text" onChange={props.handleChange}></input>
          <button
            className="btnSearch"
            onClick={() => props.handleClick(props.text.toLowerCase())}
          >
            Search
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(searchMovies(e.target.value)),
    handleClick: (text) => dispatch(fetchMovies(text)),
  };
};

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
