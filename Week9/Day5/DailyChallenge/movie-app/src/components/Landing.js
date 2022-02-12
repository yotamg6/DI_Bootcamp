import { connect } from "react-redux";
import MoviesCont from "./MoviesCont";
import Search from "./Search";
import "./landStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Landing = (props) => {
  return (
    <div className="landCont">
      <Search />
      <MoviesCont />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(Landing);
