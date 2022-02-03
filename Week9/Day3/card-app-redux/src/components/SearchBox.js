import { connect } from "react-redux";
import { searchItemStore } from "../actions/index";

const SearchBox = (props) => {
  return (
    <>
      <h4>Search</h4>
      <div>
        <input
          type="text"
          placeholder="Search robots..."
          onChange={props.searchItem}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchItem: (e) => dispatch(searchItemStore(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
