import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
const SearchResults = () => {
  const { breeds, setBreeds, height, weight, temper } = useContext(AppContext);

  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/breeds");
      setBreeds(response);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  let foundMatchIndex = [];
  const arrOfTemperIndexes = [];
  const arrOfHeightIndexes = [];
  const arrOfWeightIndexes = [];

  if (breeds.length > 0) {
    const heightMatch = breeds.filter((breed, i) => {
      if (breed.height) {
        const breedHeight = breed.height.metric.replaceAll(" ", "").split("-");
        if (height < breedHeight[1] && height > breedHeight[0])
          arrOfHeightIndexes.push(i);
      }
    });
    const weightMatch = breeds.filter((breed, i) => {
      if (breed.weight) {
        const breedWeight = breed.weight.metric.replaceAll(" ", "").split("-");

        if (weight < breedWeight[1] && weight > breedWeight[0])
          arrOfWeightIndexes.push(i);
      }
    });
    const weightnHeightMatches = arrOfHeightIndexes.filter((height) =>
      arrOfWeightIndexes.includes(height)
    );
    const userTemperArr = temper
      .replaceAll(",", "")
      .replaceAll("  ", " ")
      .toLowerCase()
      .split(" ");
    const allTemps = breeds.map((breed) => {
      if (breed.temperament) {
        return breed.temperament.replaceAll(" ", "").toLowerCase().split(",");
      }
    });
    const matchTemp = allTemps.filter((breedTempArr, i) => {
      if (breedTempArr) {
        const x =
          breedTempArr.filter((temp) => {
            return userTemperArr.includes(temp);
          }).length === userTemperArr.length;
        if (x) arrOfTemperIndexes.push(i);
      }
    });
    foundMatchIndex = arrOfTemperIndexes.find((tempInd) =>
      weightnHeightMatches.includes(tempInd)
    );
  }

  return <></>;
};

export default SearchResults;

// fetch("http://localhost:5000/api/breeds")
//     .then((resp) => resp.json())
//     // .then((data) => console.log(data))
//     .then((data) => setBreeds(data))
//     .catch((e) => console.log("frontEnd fetch error:", e));
