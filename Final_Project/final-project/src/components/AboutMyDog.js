import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";
import axios from "axios";

const AboutMyDog = () => {
  const {
    breeds,
    setBreeds,
    userBreed,
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

      // console.log("data in useffect aboutmydog:", response.data);
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
              label="about my dog"
              multiline
              maxRows={4}
              value={aboutTextArea}
              onChange={(e) => setAboutTextArea(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="enter dog name"
              maxRows={1}
              variant="outlined"
              value={nameValue}
              onChange={handleDogName}
            ></TextField>
            <TextField
              id="outlined-select"
              select
              label="Select"
              value={selectValue}
              onChange={handleChange}
              helperText="Please select your dog's breed"
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

{
  // const handleChange = (e) => {
  //   if (e.target.value > -1) setUserBreed(breeds[e.target.value].name);
  //   else if ((e.target.value = -1)) setUserBreed("Other");
  // };
  /* <select onChange={handleChange}>
          <option value="-2">Choose your breed</option>
          <option value="-1">Other</option>
          {breeds.map((breed, i) => {
            return (
              <option key={i} value={i}>
                {breed.name}
              </option>
            );
          })}
        </select> */
}
