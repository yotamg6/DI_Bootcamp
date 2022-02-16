import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const HeightSearch = () => {
  const { setHeightText } = useContext(AppContext);
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
