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
import SeeAllOtherDogs from "./components/SeeAllOtherDogs";
import Favorites from "./components/Favorites";

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
  const [userBreed, setUserBreed] = useState("");
  const [userDogName, setUserDogName] = useState(null);
  const [aboutTextArea, setAboutTextArea] = useState("");
  const [timerMsg, setTimerMsg] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

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
        timerMsg,
        setTimerMsg,
        accessToken,
        setAccessToken,
        userName,
        setUserName,
        userBreed,
        setUserBreed,
        userDogName,
        setUserDogName,
        aboutTextArea,
        setAboutTextArea,
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
          <Route path="/" element={<LoginRegister title={"Register"} />} />
          <Route
            path="/home"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/my-dog"
            element={
              <Auth>
                <MyDogProfile />
              </Auth>
            }
          />
          <Route
            path="/dog-search"
            element={
              <Auth>
                <SearchFields />
              </Auth>
            }
          />
          <Route
            path="/search-results"
            element={
              <Auth>
                <SearchResults />
              </Auth>
            }
          />
          <Route
            path="find-match"
            element={
              <Auth>
                <SeeAllOtherDogs />
              </Auth>
            }
          />
          <Route
            path="favorites"
            element={
              <Auth>
                <Favorites />
              </Auth>
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

//userdog will be nested in favs, together with fav breeds. this is only a test

export default App;

//I have downloaded few dependencies that I dont need. check that everything there is what I need and delete what I don't
