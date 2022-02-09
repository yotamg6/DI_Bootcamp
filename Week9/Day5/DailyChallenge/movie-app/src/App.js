import "./App.css";
import Search from "./components/Search";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="movie/:imdbID" element={<MovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
