import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card.js";
import "tachyons";
import React from "react";

class APP extends React.component {
  constructor() {
super();
this.state = {
  arr: []
}
  }
  componentDidMount () {
    fetch('')
  }
  render() {
    return(
      <>
      {

      }
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//       counter2: 10,
//     };
//   }
//   componentDidMount() {}

//   addOne = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//       counter2: this.state.counter2 - 1,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <button onClick={this.addOne}> Add One </button>
//           {this.state.counter} ###{this.state.counter2}
//           <Card />
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <button onclick={this.handleClick}></button>
//       <Card
//         name={"fima"}
//         email={"f@gmail.com"}
//         username={"fima_username"}
//       ></Card>
//       <Card
//         name={"yotam"}
//         email={"y@gmail.com"}
//         username={"fima_username"}
//       ></Card>
//       <Card
//         name={"avishai"}
//         email={"a@gmail.com"}
//         username={"fima_username"}
//       ></Card>
//     </div>
//   );
// }

export default App;
