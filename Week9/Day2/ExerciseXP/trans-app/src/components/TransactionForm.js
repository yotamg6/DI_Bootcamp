import React from "react";
import { connect } from "react-redux";
import { insertToList } from "../actions/index";
class TransActionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      allFields: "",
      accountNumber: "",
      FSC: "",
      name: "",
      amount: "",
      list: [],
      currentIndex: "",
    };
  }
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    const arr = this.state.list;
    console.log(arr);
    const mySubmit = {
      accountNumber: this.state.accountNumber,
      FSC: this.state.FSC,
      name: this.state.name,
      amount: this.state.amount,
    };
    arr.push(mySubmit);
    this.setState({
      allFields:
        this.state.accountNumber +
        this.state.FSC +
        this.state.name +
        this.state.amount,
      list: arr,
      currentIndex: this.state.currentIndex + 1,
    });
    this.props.insertToList([...arr], this.state.currentIndex);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          name="accountNumber"
          placeholder="Account Number"
          //   value={this.props.list.name}
        ></input>
        <input
          onChange={this.handleInputChange}
          name="FSC"
          placeholder="FSC"
        ></input>
        <input
          onChange={this.handleInputChange}
          name="name"
          placeholder="A/C Holder Name"
        ></input>
        <input
          onChange={this.handleInputChange}
          name="amount"
          placeholder="Amount"
        ></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertToList: (arr, i) => dispatch(insertToList(arr, i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransActionForm);
