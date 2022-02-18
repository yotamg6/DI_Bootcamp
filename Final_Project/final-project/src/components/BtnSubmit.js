import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const BtnSubmit = (props) => {
  //   console.log(props.filterMatches);
  let navigate = useNavigate();
  const {
    heightText,
    weightText,
    temperText,
    setHeight,
    setWeight,
    setTemper,
    matchIndexes,
  } = useContext(AppContext);
  const handleClick = () => {
    setHeight(heightText);
    setWeight(weightText);
    setTemper(temperText);
    props.filterMatches();
    navigate("/search-results");
    // if (matchIndexes.length > 0) navigate("search-results");
  };
  return (
    <>
      <button onClick={handleClick}>Get a match!</button>
    </>
  );
};

export default BtnSubmit;
