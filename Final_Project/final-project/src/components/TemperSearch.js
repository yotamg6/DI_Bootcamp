import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";
const TemperSearch = () => {
  const [value, setValue] = useState("");
  const [allBreedTempers, setAllBreedTempers] = useState([]);
  const [allUniqueTemps, setAllUniqueTemps] = useState([]);
  const [selectedTemper, setSelectedTemper] = useState();
  const { breeds, setTemperMatchIndexes } = useContext(AppContext);
  const arrOfTemperIndexes = [];

  useEffect(() => {
    const allTemps = breeds.map((breed) => {
      if (breed.temperament) {
        return breed.temperament.replaceAll(" ", "").toLowerCase().split(",");
      }
    });
    setAllBreedTempers(allTemps);

    const flatTemps = allTemps.flat().sort();
    const uniqueTempsSet = new Set(flatTemps);
    const uniqueTemps = [...uniqueTempsSet];
    setAllUniqueTemps(uniqueTemps);
  }, []);

  useEffect(() => {
    const matchTemp = allBreedTempers.filter((breedTempArr, i) => {
      if (breedTempArr) {
        if (breedTempArr.includes(selectedTemper)) {
          arrOfTemperIndexes.push(i);
        }
      }
    });
    console.log("arr of indexes", arrOfTemperIndexes);
    setTemperMatchIndexes(arrOfTemperIndexes);
  }, [selectedTemper]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setSelectedTemper(e.target.value);
  };

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
              label="Temperament"
              value={value}
              onChange={handleChange}
              helperText="Please select a desired temperament"
            >
              {allUniqueTemps.map((temp, i) => {
                return (
                  <MenuItem key={i} value={temp}>
                    {temp}
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

export default TemperSearch;
