import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";

const AboutMyDog = () => {
  const {
    breeds,
    setBreeds,
    userBreed,
    setUserBreed,
    setUserDogName,
    aboutTextArea,
    setAboutTextArea,
  } = useContext(AppContext);

  const [value, setValue] = useState("");

  useEffect(async () => {
    setAboutTextArea("");
    try {
      const response = await fetch("http://localhost:5000/api/breeds");
      const data = await response.json();
      // console.log("data in usefect:", data);
      await setBreeds(data);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    setUserBreed(e.target.value);
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
              onChange={(e) => setUserDogName(e.target.value)}
            ></TextField>
            <TextField
              id="outlined-select"
              select
              label="Select"
              value={value}
              onChange={handleChange} //set. also allow to choose "other"
              helperText="Please select your dog's breed"
            >
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

// dog temper (textfield?), that will be displayed next to their dog pic and name

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
