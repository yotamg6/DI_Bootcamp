import React, { useContext } from "react";
import { AppContext } from "../App";
const WeightSearch = () => {
  const { setWeight } = useContext(AppContext);

  return (
    <>
      <div>
        <input
          name="weightTxt"
          type="text"
          placeholder="Desired weight"
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default WeightSearch;
