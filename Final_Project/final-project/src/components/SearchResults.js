import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const SearchResults = () => {
  const { breeds, matchIndexes } = useContext(AppContext);

  return (
    <>
      <div>
        {matchIndexes.length > 0 ? (
          matchIndexes.map((index) => {
            console.log(breeds[index].name);
            return (
              <div key={index}>
                {breeds[index].name}
                <img src={breeds[index].image.url}></img>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
