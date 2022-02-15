import React, { useState, useEffect, useContext } from "react";
const { setTemperText } = useContext(AppContext);
const TemperSearch = () => {
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
