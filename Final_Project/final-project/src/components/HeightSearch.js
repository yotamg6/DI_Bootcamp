import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";

const HeightSearch = () => {
  const { breeds, setHeightMatchIndexes } = useContext(AppContext);
  const [breedHeights, setBreedHeights] = useState([]);
  const [heightSpans, setHeightSpans] = useState([]);
  const [value, setValue] = useState("");
  const [selectedHeights, setSelectedHeights] = useState();
  const arrOfBreedHeights = [];
  const arrOfHeightSpans = [];
  const arrOfHeightIndexes = [];

  const handleChange = (e) => {
    setValue(e.target.value);
    setSelectedHeights(e.target.value);
  };

  useEffect(() => {
    if (selectedHeights) {
      const splitted = selectedHeights.replaceAll(" ", "").split("-");

      const parsedSelectedF = parseInt(splitted[0], 10);
      const parsedSelectedS = parseInt(splitted[1], 10);
      const sequence = [];
      for (let i = parsedSelectedF; i <= parsedSelectedS; i++) {
        sequence.push(i);
      }

      breeds.map((breed, index) => {
        if (breed.height) {
          const splittedBreedHeight = breed.height.metric
            .replaceAll(" ", "")
            .split("-");
          const breedParsedF = parseInt(splittedBreedHeight[0], 10);
          const breedParsedS = parseInt(splittedBreedHeight[1], 10);

          sequence.map((elem) => {
            if (
              breedParsedF &&
              breedParsedS &&
              elem <= breedParsedS &&
              elem >= breedParsedF
            ) {
              arrOfHeightIndexes.push(index);
            }
          });
        }
      });
      const uniqueIndexesSet = new Set(arrOfHeightIndexes);
      const uniqueIndexes = [...uniqueIndexesSet];

      setHeightMatchIndexes(uniqueIndexes);
    }
  }, [selectedHeights]);

  useEffect(() => {
    const breedLen = breedHeights.length;

    for (let i = 0; i < breedLen; i = i + 6) {
      if (breedHeights[i + 6]) {
        const span = `${breedHeights[i]} - ${breedHeights[i + 6]}`;
        arrOfHeightSpans.push(span);
      }
    }
    setHeightSpans(arrOfHeightSpans);
  }, [breedHeights]);

  useEffect(() => {
    breeds.map((breed, i) => {
      if (breed.height) {
        const heightToArr = breed.height.metric.replaceAll(" ", "").split("-");
        arrOfBreedHeights.push(heightToArr);
      }
    });
    const sortedAllHeights = arrOfBreedHeights.flat().sort((a, b) => a - b);
    const uniqueHeightsSet = new Set(sortedAllHeights);
    const uniqueHeights = [...uniqueHeightsSet];

    setBreedHeights(uniqueHeights);
  }, []);

  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            backgroundColor: "#F0FFFF",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select"
              select
              value={value}
              onChange={handleChange}
              label="Height (m)"
              helperText="Select a desired height-span"
            >
              {heightSpans.map((span, i) => {
                return (
                  <MenuItem key={i} value={span}>
                    {span}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
        </Box>
      </div>
    </>
  );
};

export default HeightSearch;
