import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
