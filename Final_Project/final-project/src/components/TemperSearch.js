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

    const flatTemps = allTemps.flat();
    const uniqueTempsSet = new Set(flatTemps);
    const uniqueTemps = [...uniqueTempsSet];
    // console.log("unique", uniqueTemps);
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

    // if (matchTemp) arrOfTemperIndexes.push(matchTemp);
    // console.log("arr of indexes", arrOfTemperIndexes);
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

// const arr = [];
// //array of arrays=> loop through and get two tempers of each array. every two should be unique.
// for (let i = 0; i < tempers.length; i++) {
//   // for (let z=i; z<4; z++) {
//   // const fourElemArr = tempers[i].slice(0,4)
//   const filteredUnique = tempers[i].filter((elem) => {
//     !tempers[i + 1].includes(elem);
//     arr.push(filteredUnique);
//   });

//   filter((temp, index) => {
//     tempers[i + 1].includes(temp);
//   });
// }

// console.log("alltemps", allTemps);
// const plusOne = allTemps[i + 1];
// console.log("plusone", plusOne);

// for (let i = 0; i < breedTemperLength - 1; i++) {
//   if (allTemps[i]) {
//     for (let z = i + 1; z < breedTemperLength - 1; z++) {
//       if (allTemps[z]) {
//         const filteredUnique = allTemps[i].filter((elem) => {
//           return !allTemps[z].includes(elem);
//         });
//         arr.push(filteredUnique);
//       }
//     }
//   }
// }

// const flatTemps = allTemps.flat();
//       // const unique = new Set(flatTemps);
//       // console.log("unique", unique);

////////////////////////////////////////////////////
// const arr = [];
//       const breedTemperLength = allTemps.length;
//       const arrLen = arr.length;
// for (let i = 0; i < breedTemperLength - 1; i++) {
//   if (allTemps[i] && allTemps[i + 1]) {
//     const filteredUnique = allTemps[i].filter((elem) => {
//       return !allTemps[i + 1].includes(elem);
//     });
//     // console.log(filteredUnique);
//     // if (arrLen > 0) {
//     console.log("test");
//     const compared = arr.map((nested) => {
//       if (nested) {
//         const x = filteredUnique.filter((elem) => {
//           return !nested.includes(elem);
//         });
//       }
//       arr.push(filteredUnique);
//       console.log(compared);
//     });
//     // } else arr.push(filteredUnique);
//   }
// }

// //
// // console.log("arrOfArrUnique?", arr);
//I think I'm close. small adjustments and it's there. if there's time...
///////////////////////////////////////////////////////////////
