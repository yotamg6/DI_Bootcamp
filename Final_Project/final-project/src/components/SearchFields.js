import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Grid } from "@mui/material";

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

      if (temperMatchIndexes.length > 0 && weightnHeightMatches.length > 0) {
        const allMatchIndexes = temperMatchIndexes.filter((tempInd) =>
          weightnHeightMatches.includes(tempInd)
        );
        if (allMatchIndexes.length > 0) {
          setMatchIndexes(allMatchIndexes);
        }
      }
      navigate("/search-results");
    }
  };
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <h2>Findout what is the perfect breed for you and your dog</h2>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
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
        </Stack>
      </Grid>
    </>
  );
};

export default SearchFields;
