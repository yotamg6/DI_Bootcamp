import React, { useState, useEffect, createContext } from "react";
import "./App.css";
// import TempSearch from "./components/TempSearch";
import HeightSearch from "./components/HeightSearch";
import WeightSearch from "./components/WeightSearch";
import TemperSearch from "./components/TemperSearch";
import BtnSubmit from "./components/BtnSubmit";
import SearchResults from "./components/SearchResults";

export const AppContext = createContext(null);
const App = () => {
  const [heightText, setHeightText] = useState("");
  const [weightText, setWeightText] = useState("");
  const [temperText, setTemperText] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [temper, setTemper] = useState("");
  const [breeds, setBreeds] = useState("");
  return (
    <AppContext.Provider
      value={
        ({ heightText, setHeightText },
        { weightText, setWeightText },
        { temperText, setTemperText },
        { height, setHeight },
        { weight, setWeight },
        { temper, setTemper },
        { breeds, setBreeds })
      }
    >
      <div className="App">
        <HeightSearch />
        <WeightSearch />
        <TemperSearch />
        <BtnSubmit />
        <SearchResults />
      </div>
    </AppContext.Provider>
  );
};

export default App;

//I have downloaded few dependencies that I dont need. check that everything there is what I need and delete what I don't
