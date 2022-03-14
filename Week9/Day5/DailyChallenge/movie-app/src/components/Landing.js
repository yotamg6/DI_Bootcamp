import { connect } from "react-redux";
import MoviesCont from "./MoviesCont";
import Search from "./Search";
import "./landStyle.css";

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
