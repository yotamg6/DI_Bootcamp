import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";
import axios from "axios";

const AboutMyDog = () => {
  const {
    breeds,
    setBreeds,
    setUserBreed,
    setUserDogName,
    nameValue,
    setNameValue,
    aboutTextArea,
    setAboutTextArea,
    selectValue,
    setSelectValue,
  } = useContext(AppContext);

  useEffect(async () => {
    setAboutTextArea("");
    try {
      const response = await axios.get("http://localhost:5000/api/breeds");

      await setBreeds(response.data);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    setUserBreed(e.target.value);
  };

  const handleDogName = (e) => {
    setUserDogName(e.target.value);
    setNameValue(e.target.value);
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
              id="outlined-multiline-flexible"
              label="About my dog"
              multiline
              maxRows={4}
              value={aboutTextArea}
              onChange={(e) => setAboutTextArea(e.target.value)}
              helperText="Please describe your dog briefly"
              sx={{ m: 1, backgroundColor: "#FFFFE0" }}
            />
          </div>
          <div>
            <TextField
              label="Enter dog name"
              maxRows={1}
              variant="outlined"
              value={nameValue}
              onChange={handleDogName}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            ></TextField>
            <TextField
              id="outlined-select"
              select
              label="Dog breed"
              value={selectValue}
              onChange={handleChange}
              helperText="Please select your dog's breed"
              sx={{ m: 1, backgroundColor: "#DB7093" }}
            >
              <MenuItem value="Other">Other</MenuItem>
              {breeds.map((breed, i) => {
                return (
                  <MenuItem key={i} value={breed.name}>
                    {breed.name}
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

export default AboutMyDog;
