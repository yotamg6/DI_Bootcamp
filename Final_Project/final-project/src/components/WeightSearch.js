import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";

const WeightSearch = () => {
  const { breeds, setWeightMatchIndexes } = useContext(AppContext);
  const [breedWeights, setBreedWeights] = useState([]);
  const [weightSpans, setWeightSpans] = useState([]);
  const [value, setValue] = useState("");
  const [selectedWeights, setSelectedWeights] = useState();
  const arrOfBreedWeights = [];
  const arrOfWeightSpans = [];
  const arrOfWeightIndexes = [];

  const handleChange = (e) => {
    setValue(e.target.value);
    setSelectedWeights(e.target.value);
  };

  useEffect(() => {
    if (selectedWeights) {
      const splitted = selectedWeights.replaceAll(" ", "").split("-");
      // console.log(splitted);
      const parsedSelectedF = parseInt(splitted[0], 10);
      const parsedSelectedS = parseInt(splitted[1], 10);
      const sequence = [];
      for (let i = parsedSelectedF; i <= parsedSelectedS; i++) {
        sequence.push(i);
      }
      breeds.map((breed, index) => {
        if (breed.weight) {
          const splittedBreedWeight = breed.weight.metric
            .replaceAll(" ", "")
            .split("-");
          const breedParsedF = parseInt(splittedBreedWeight[0], 10);
          const breedParsedS = parseInt(splittedBreedWeight[1], 10);

          sequence.map((elem) => {
            if (
              breedParsedF &&
              breedParsedS &&
              elem <= breedParsedS &&
              elem >= breedParsedF
            ) {
              arrOfWeightIndexes.push(index);
            }
          });
        }
      });
      const uniqueIndexesSet = new Set(arrOfWeightIndexes);
      const uniqueIndexes = [...uniqueIndexesSet];
      console.log("uniqueI", uniqueIndexes);
      setWeightMatchIndexes(uniqueIndexes);
    }
  }, [selectedWeights]);

  useEffect(() => {
    const breedLen = breedWeights.length;
    const wOutEnd = breedLen - parseInt(breedLen / 6);

    for (let i = 0; i < breedLen; i = i + 5) {
      if (breedWeights[i + 5] && i < wOutEnd) {
        const span = `${breedWeights[i]} - ${breedWeights[i + 5]}`;
        arrOfWeightSpans.push(span);
      } else if (i == wOutEnd) {
        const lastSpan = `${breedWeights[wOutEnd]} - ${
          breedWeights[wOutEnd + 6]
        }`;
        arrOfWeightSpans.push(lastSpan);
      }
    }
    setWeightSpans(arrOfWeightSpans);
    // console.log("WeightSpans", arrOfWeightSpans);
  }, [breedWeights]);

  useEffect(() => {
    breeds.map((breed) => {
      if (breed.weight.metric && breed.weight.metric !== "NaN") {
        const weightToArr = breed.weight.metric.replaceAll(" ", "").split("-");

        arrOfBreedWeights.push(weightToArr);
      }
    });

    const flatAllWeights = arrOfBreedWeights.flat();
    const onlyNumbers = flatAllWeights.filter((elem) => elem !== "NaN");
    const sortedWeights = onlyNumbers.sort((a, b) => a - b);
    const uniqueWeightsSet = new Set(sortedWeights);
    const uniqueWeights = [...uniqueWeightsSet];
    // console.log("uniqueWeights", uniqueWeights);
    setBreedWeights(uniqueWeights);
  }, []);

  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
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
              label="Weight (m)"
              helperText="Please select a desired weight-span"
            >
              {weightSpans.map((span, i) => {
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

export default WeightSearch;
