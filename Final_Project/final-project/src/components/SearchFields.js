import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AppContext } from "../App";
import HeightSearch from "./HeightSearch";
import WeightSearch from "./WeightSearch";
import TemperSearch from "./TemperSearch";
const SearchFields = () => {
  let navigate = useNavigate();

  const {
    breeds,
    temperMatchIndexes,
    heightMatchIndexes,
    weightMatchIndexes,
    setMatchIndexes,
  } = useContext(AppContext);

  useEffect(() => {
    setMatchIndexes([]);
  }, []);

  const calcFilters = () => {
    if (breeds.length > 0) {
      const weightnHeightMatches = heightMatchIndexes.filter((height) =>
        weightMatchIndexes.includes(height)
      );
      console.log("weightnheight:", weightnHeightMatches);

      if (temperMatchIndexes.length > 0 && weightnHeightMatches.length > 0) {
        const allMatchIndexes = temperMatchIndexes.filter((tempInd) =>
          weightnHeightMatches.includes(tempInd)
        );
        if (allMatchIndexes.length > 0) {
          console.log("all filters:", allMatchIndexes);
          setMatchIndexes(allMatchIndexes);
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
      <Button variant="contained" onClick={calcFilters}>
        Find your breed
      </Button>
    </>
  );
};

export default SearchFields;
