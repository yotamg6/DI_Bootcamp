import { connect } from "react-redux";
import { showDetails } from "../redux/actions";

const MovieList = (props) => {
  return (
    <>
      <h1>Movie List</h1>
      {props.details.map((item) => {
        return (
          <>
            <p>{item.title}</p>
            <button onClick={() => props.showDetails(item)}>details</button>
          </>
        );
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    details: state.moviesDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //first showDetails is from the button , second showDetails is from the actions
    showDetails: (item) => dispatch(showDetails(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
