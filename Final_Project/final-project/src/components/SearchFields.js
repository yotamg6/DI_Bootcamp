import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import HeightSearch from "./HeightSearch";
import WeightSearch from "./WeightSearch";
import TemperSearch from "./TemperSearch";
const SearchFields = () => {
  let navigate = useNavigate();
  const { breeds, height, weight, temper, setMatchIndexes } =
    useContext(AppContext);

  const calcFilters = () => {
    if (breeds.length > 0) {
      console.log("temper inside filters", temper);

      const arrOfTemperIndexes = [];
      const arrOfHeightIndexes = [];
      const arrOfWeightIndexes = [];

      const heightMatch = breeds.filter((breed, i) => {
        if (breed.height) {
          const breedHeight = breed.height.metric
            .replaceAll(" ", "")
            .split("-");
          if (height <= breedHeight[1] && height >= breedHeight[0])
            arrOfHeightIndexes.push(i);
        }
      });
      const weightMatch = breeds.filter((breed, i) => {
        if (breed.weight) {
          const breedWeight = breed.weight.metric
            .replaceAll(" ", "")
            .split("-");

          if (weight <= breedWeight[1] && weight >= breedWeight[0])
            arrOfWeightIndexes.push(i);
        }
      });
      const weightnHeightMatches = arrOfHeightIndexes.filter((height) =>
        arrOfWeightIndexes.includes(height)
      );
      console.log("weightnheight:", weightnHeightMatches);
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
      const userTemperLength = userTemperArr.length;
      const matchTemp = allTemps.filter((breedTempArr, i) => {
        if (breedTempArr) {
          const x =
            breedTempArr.filter((temp) => {
              return userTemperArr.includes(temp);
            }).length === userTemperLength;
          if (x) arrOfTemperIndexes.push(i);
        }
      });
      if (arrOfTemperIndexes.length > 0 && weightnHeightMatches.length > 0) {
        const foundMatchIndexes = arrOfTemperIndexes.filter((tempInd) =>
          weightnHeightMatches.includes(tempInd)
        );
        if (foundMatchIndexes.length > 0) {
          // console.log("all filters:", foundMatchIndexes);
          setMatchIndexes(foundMatchIndexes);
        }
      }
      navigate("/search-results");
    }
  };
  return (
    <>
      <div>
        <HeightSearch />
      </div>
      <div>
        <WeightSearch />
      </div>
      <div>
        <TemperSearch />
      </div>
      <button onClick={calcFilters}>Find your breed</button>
    </>
  );
};

export default SearchFields;