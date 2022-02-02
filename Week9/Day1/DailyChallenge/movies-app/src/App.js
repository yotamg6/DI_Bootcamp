import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

import { movieSelect } from "./actions/index";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MovieList />
          <MovieDetails />
        </header>
      </div>
    );
  }
}

export default App;
