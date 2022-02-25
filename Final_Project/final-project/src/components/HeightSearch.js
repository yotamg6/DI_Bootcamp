import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";

const HeightSearch = () => {
  const { breeds } = useContext(AppContext);
  const [breedHeights, setBreedHeights] = useState([]);
  const [value, setValue] = useState("");
  const [selectedHeights, setSelectedHeights] = useState();
  const arrOfBreedHeights = [];
  const heightSpans = [];

  const handleChange = (e) => {
    setValue(e.target.value);
    setSelectedHeights(e.target.value);
  };

  // useEffect(() => {
  //   console.log("breedHeights", breedHeights);
  //   const breedLen = breedHeights.length;
  //   // for (let i = 0; i < 49; i + 5) {
  //   //   if (i + 5) {
  //   //     const span = `${breedHeights[i]} - ${breedHeights[i + 5]}`;
  //   //     console.log("span", span);
  //   //     //     heightSpans.push(span);
  //   //   }
  //   // }
  //   // console.log("heightSpans", heightSpans);
  // }, [breedHeights]);

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
    // console.log("uniqueheights", uniqueHeights);
    setBreedHeights(uniqueHeights);
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
              label="Select"
              value={value}
              onChange={handleChange}
              helperText="Please select a desired height-span"
            >
              {breedHeights.map((heightSpan, i) => {
                return (
                  <MenuItem key={i} value={heightSpan}>
                    {heightSpan[i]}-{heightSpan[i + 10]}
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
