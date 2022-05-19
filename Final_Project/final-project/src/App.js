import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
  const [temperMatchIndexes, setTemperMatchIndexes] = useState([]);
  const [heightMatchIndexes, setHeightMatchIndexes] = useState([]);
  const [weightMatchIndexes, setWeightMatchIndexes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [matchIndexes, setMatchIndexes] = useState([]);
  const [userName, setUserName] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [userBreed, setUserBreed] = useState("");
  const [userDogName, setUserDogName] = useState(null);
  const [aboutTextArea, setAboutTextArea] = useState("");
  const [timerMsg, setTimerMsg] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AppContext.Provider
      value={{
        breeds,
        setBreeds,
        temperMatchIndexes,
        setTemperMatchIndexes,
        heightMatchIndexes,
        setHeightMatchIndexes,
        weightMatchIndexes,
        setWeightMatchIndexes,
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
        nameValue,
        setNameValue,
        aboutTextArea,
        setAboutTextArea,
        selectValue,
        setSelectValue,
      }}
    >
      <div
        className="App"
        style={{
          backgroundImage: "url(/images/paws.jpeg )",
        }}
      >
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
            path="/my-dog"
            element={
              <Auth>
                <MyDogProfile />
              </Auth>
            }
          />
          <Route
            path="/breed-search"
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

export default App;
