import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import LoginRegister from "./components/LoginRegister";
import MyDogProfile from "./components/MyDogProfile";
import SearchFields from "./components/SearchFields";
import SearchResults from "./components/SearchResults";
import Nav from "./components/Nav";
import { Auth } from "./auth/Auth";

export const AppContext = createContext(null);
const App = () => {
  const [heightText, setHeightText] = useState();
  const [weightText, setWeightText] = useState("");
  const [temperText, setTemperText] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [temper, setTemper] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [matchIndexes, setMatchIndexes] = useState([]);
  const [userName, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState();
  const [redirect, setRedirect] = useState(null);
  return (
    <AppContext.Provider
      value={{
        heightText,
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
        setTemper,
        breeds,
        setBreeds,
        matchIndexes,
        setMatchIndexes,
        accessToken,
        setAccessToken,
        redirect,
        setRedirect,
        userName,
        setUserName,
      }}
    >
      <div className="App">
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginRegister title={"Login"} />} />
          <Route
            path="/register"
            element={<LoginRegister title={"Register"} />}
          />
          <Route path="" element={<Home />} />
          <Route
            path="/my-dog"
            element={
              <Auth>
                <MyDogProfile />
              </Auth>
            }
          />
          <Route path="/dog-search" element={<SearchFields />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;

//I have downloaded few dependencies that I dont need. check that everything there is what I need and delete what I don't
