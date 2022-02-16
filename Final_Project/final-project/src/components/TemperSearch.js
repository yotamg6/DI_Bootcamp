import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
const TemperSearch = () => {
  const { setTemperText } = useContext(AppContext);
  const handleChange = (e) => {
    setTemperText(e.target.value);
  };
  return (
    <>
      <div>
        <input
          name="temperText"
          type="text"
          placeholder="Desired temperament"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default TemperSearch;
