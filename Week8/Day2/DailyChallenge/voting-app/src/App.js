import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  updateVote = (index) => {
    this.state.languages[index].votes++;
    const langmutated = [...this.state.languages];
    this.setState({ languages: langmutated });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.languages.map((lang, i) => {
            return (
              <div key={i}>
                {lang.name} {lang.votes}
                <button onclick={() => this.updateVote(i)}>add vote</button>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
