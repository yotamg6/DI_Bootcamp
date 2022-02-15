import React, { useState, useEffect, useContext } from "react";
const { setWeightText } = useContext(AppContext);
const WeightSearch = () => {
  const handleChange = (e) => {
    setWeightText(e.target.value);
  };
  return (
    <>
      <div>
        <input
          name="weightTxt"
          type="text"
          placeholder="Desired height"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default WeightSearch;
