import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";

const SearchResults = () => {
  const { breeds, matchIndexes, userName } = useContext(AppContext);

  const addToBreedFavs = async (index) => {
    const chosenBreedName = breeds[index].name;
    try {
      const response = await axios.post("http://localhost:5000/breed-favs", {
        userName,
        index,
      });
      console.log("data from add to favbreeds", response.data);
    } catch (e) {
      console.log("error from add to breedfavs", e);
    }
  };

  return (
    <>
      <div>
        {matchIndexes.length > 0 ? (
          matchIndexes.map((index) => {
            // console.log(breeds[index].name);
            return (
              <div key={index}>
                {breeds[index].name}
                <img src={breeds[index].image.url}></img>
                <button onClick={() => addToBreedFavs(index)}>
                  Add breed to my favorites
                </button>
              </div>
            );
          })
        ) : (
          <div>No breed matches your search. please try again</div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
