import React, { useState, useEffect, useContext } from "react";
const { setHeightText } = useContext(AppContext);
const HeightSearch = () => {
  const handleChange = (e) => {
    setHeightText(e.target.value);
  };
  return (
    <>
      <div>
        <input
          name="heightTxt"
          type="text"
          placeholder="Desired height"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default HeightSearch;
