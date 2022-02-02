import React from "react";
class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      sname: "",
      result: [],
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.sname}&fname=${this.state.fname}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8b0c9f2536mshc8d9eaac0051a02p16281djsnafb9e1c70f62",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ result: data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // console.log("clicked");

  render() {
    return (
      <div>
        <h1>Result</h1>
        <h2>sname&&fname</h2>
        {this.props.result.fname}
        {this.props.result.sname}
        <h2>Percentage</h2>
        {this.props.result.percentage}
        <h2>Result</h2>
        {this.props.result.result}
      </div>
    );
  }
}

export default Result;
