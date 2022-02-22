import React, { useContext } from "react";
import { AppContext } from "../App";
const TemperSearch = () => {
  const { setTemper } = useContext(AppContext);

  return (
    <>
      <div>
        <input
          name="temperText"
          type="text"
          placeholder="Desired temperament"
          onChange={(e) => setTemper(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default TemperSearch;
