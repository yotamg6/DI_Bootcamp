import React from "react";
import "./App.css";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";

const carinfo = { name: "Ford", model: "Mustang" };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car carinfo={carinfo}></Car>
        <Events />
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;
