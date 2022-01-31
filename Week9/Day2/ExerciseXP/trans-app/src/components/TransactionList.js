import TransactionForm from "./TransactionForm";
import { connect } from "react-redux";
import React from "react";
import { updateIndex, deleteTrans } from "../actions/index";
class TransactionList extends React.Component {
  constructor() {
    super();
  }
  handleEdit = (i) => {
    console.log(this.props.list[i]);
  };
  //   handleDelete = (i) => {

  //   };
  render() {
    return (
      <div>
        <TransactionForm />
        {this.props.list.map((item, i) => {
          return (
            <div key={i}>
              <table>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.accountNumber}</td>
                    <td>{item.FSC}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={() => this.props.handleEdit(i)}>EDIT</button>
              <button onClick={() => this.props.handleDelete(i)}>DELETE</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit: (i) => dispatch(updateIndex(i)),
    handleDelete: (i) => dispatch(deleteTrans(i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
