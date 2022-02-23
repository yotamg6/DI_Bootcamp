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
        <h1>My matching breeds</h1>
        {matchIndexes.length > 0 ? (
          matchIndexes.map((index) => {
            // console.log(breeds[index].name);
            return (
              <div key={index}>
                <div
                  style={{
                    display: "inline-block",
                    width: "300px",
                    height: "200px",
                    margin: "10px",
                  }}
                >
                  <h3>{breeds[index].name}</h3>
                  <img
                    style={{ height: "auto", maxWidth: "100%" }}
                    src={breeds[index].image.url}
                  ></img>
                  <p>
                    <strong>Temperament: </strong>
                    {breeds[index].temperament}
                  </p>
                  <button onClick={() => addToBreedFavs(index)}>
                    Add breed to my favorites
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No breed matches your search. please try again</div> // add alink to my-favorites
        )}
      </div>
    </>
  );
};

export default SearchResults;

{
  /* <div>
        {myBreedFavs.length > 0
          ? myBreedFavs.map((indexObj) => {
              const index = indexObj.breed_index;

              return (
                <div key={index}>
                  <div
                    style={{
                      display: "inline-block",
                      width: "300px",
                      height: "200px",
                      margin: "10px",
                    }}
                  >
                    <h3>My favorite breeds</h3>
                    <p>{breeds[index].name}</p>
                    <img
                      style={{ height: "auto", maxWidth: "100%" }}
                      src={breeds[index].image.url}
                    ></img>
                    <p>
                      <strong>Temperament: </strong>
                      {breeds[index].temperament}
                    </p>
                  </div>
                </div> */
}
