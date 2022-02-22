import React, { useContext } from "react";
import { AppContext } from "../App";

const HeightSearch = () => {
  const { setHeight } = useContext(AppContext);

  return (
    <>
      <div>
        <input
          name="heightTxt"
          type="text"
          placeholder="Desired height"
          onChange={(e) => setHeight(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default HeightSearch;
