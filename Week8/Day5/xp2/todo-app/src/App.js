import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
}

export default App;
