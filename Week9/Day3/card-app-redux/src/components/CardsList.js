import React, { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { connect } from "react-redux";
import { getRobotsInStore } from "../actions/index";

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      // arr: [],
      // txt: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => this.props.getRobots(data))
  //     // this.setState({ arr: data });
  //     .catch((e) => console.log(e));
  // }

  render() {
    this.props.getRobots();
    const { txt, arr } = this.props;
    const filterArr = arr.filter((item) => {
      return item.name.toLowerCase().includes(txt.toLowerCase());
    });
    return (
      <>
        {this.props.isFatching ? <h2>loading...</h2> : null}
        <SearchBox />
        {filterArr.map((item, i) => {
          return (
            <div key={i} style={{ display: "inline-block" }}>
              <Card user={item} />
            </div>
          );
        })}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: (data) => dispatch(getRobotsInStore(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    txt: state.txt,
    arr: state.arr,
    isFatching: state.isFatching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);

// searchItem = (e) => {
//   // console.log(e.target.value);
//   this.setState({ txt: e.target.value });
// };

// searchItemClick = () => {
//   this.setState({ txtClick: this.state.txt });
// };
