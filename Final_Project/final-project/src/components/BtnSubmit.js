import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const BtnSubmit = () => {
  const {
    heightText,
    weightText,
    temperText,
    setHeight,
    setWeight,
    setTemper,
  } = useContext(AppContext);
  const handleClick = () => {
    setHeight(heightText);
    setWeight(weightText);
    setTemper(temperText);
  };
  return (
    <>
      <button onClick={handleClick}>Get a match!</button>
    </>
  );
};

export default BtnSubmit;
