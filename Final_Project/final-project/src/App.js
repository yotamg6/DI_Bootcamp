import React, { useState, useEffect, createContext } from "react";
import "./App.css";
// import TempSearch from "./components/TempSearch";
import HeightSearch from "./components/heightSearch";
import WeightSearch from "./components/weightSearch";
import TemperSearch from "./components/TemperSearch";
import BtnSubmit from "./components/BtnSubmit";

export const AppContext = createContext(null);
function App() {
  const { heightText, setHeightText } = useState();
  const { weightText, setWeightText } = useState();
  const { temperText, setTemperText } = useState();
  const { height, setHeight } = useState();
  const { weight, setWeight } = useState();
  const { temper, setTemper } = useState();
  return (
    <AppContext.Provider
      value={
        (heightText,
        setHeightText,
        weightText,
        setWeightText,
        temperText,
        setTemperText,
        height,
        setHeight,
        weight,
        setWeight,
        temper,
        setTemper)
      }
    >
      <div className="App">
        <HeightSearch />
        <WeightSearch />
        <TemperSearch />
        <BtnSubmit />
      </div>
    </AppContext.Provider>
  );
}

export default App;

//I have downloaded few dependencies that I dont need. check that everything there is what I need and delete what I don't
