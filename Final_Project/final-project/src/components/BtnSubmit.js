import React, { useState, useEffect, useContext } from "react";
const { heightText, weightText, temperText, setHeight, setWeight, setTemper } =
  useContext(AppContext);
const BtnSubmit = () => {
  const handleClick = () => {
    setHeight(heightText);
    setWeight(weightText);
    setTemper(temperText);
  };
  return (
    <>
      <button onClick={handleClick}></button>
    </>
  );
};

export default BtnSubmit;
