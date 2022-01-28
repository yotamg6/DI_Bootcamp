import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArr: [],
    };
  }
  handleSubmit = (e) => {
    if (e.key === "Enter") {
      const todo = e.target.value;
      const arr = this.state.todoArr;
      arr.push(todo);
      this.setState({ todoArr: arr });
    }
  };
  deleteTask = (index) => {
    const newArr = this.state.todoArr.filter((item, i, arr) => i !== index);
    this.setState({ todoArr: newArr });
  };
  strikeThrough = (e) => {
    e.target.style.textDecorationLine =
      e.type == "mouseenter" ? "line-through" : "none";
  };

  render() {
    return (
      <div>
        <h1>Todo's</h1>
        <input
          type="text"
          name="add"
          placeholder="add a new todo"
          onKeyPress={this.handleSubmit}
        ></input>
        {this.state.todoArr.map((item, i) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onMouseEnter={this.strikeThrough}
              onMouseLeave={this.strikeThrough}
              onClick={() => this.deleteTask(i)}
              key={i}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
