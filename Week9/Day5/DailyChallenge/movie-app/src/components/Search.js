import { connect } from "react-redux";
import { searchMovies, fetchMovies } from "../redux/actions";
import Card from "react-bootstrap/Card";

const Search = (props) => {
  return (
    <>
      <Card
        className="container"
        style={{ width: "80rem", height: "20rem", backgroundColor: "grey" }}
      >
        <Card.Body>
          <Card.Title>Search for a Movie/TV Series</Card.Title>
          <input
            style={{ width: "20rem", height: "4rem" }}
            type="text"
            onChange={props.handleChange}
          ></input>
          <button
            style={{ color: "white", backgroundColor: "blue" }}
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
