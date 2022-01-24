import React, { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      txt: "",
      txtClick: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ arr: data });
      });
  }
  searchItem = (e) => {
    // console.log(e.target.value);
    this.setState({ txt: e.target.value });
  };

  searchItemClick = () => {
    this.setState({ txtClick: this.state.txt });
  };
  render() {
    const { txt, arr, txtClick } = this.state;
    console.log(txtClick);
    const filterArr = arr.filter((item) => {
      return item.name.toLowerCase().includes(txtClick.toLowerCase());
    });
    return (
      <>
        <SearchBox
          searchItem={this.searchItem}
          searchItemClick={this.searchItemClick}
        />

        {filterArr.map((item, i) => {
          return <Card user={item} />;
        })}
      </>
    );
  }
}
export default CardsList;
