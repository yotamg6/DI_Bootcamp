import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
const WeightSearch = () => {
  const { setWeightText } = useContext(AppContext);
  const handleChange = (e) => {
    setWeightText(e.target.value);
  };
  return (
    <>
      <div>
        <input
          name="weightTxt"
          type="text"
          placeholder="Desired weight"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default WeightSearch;
