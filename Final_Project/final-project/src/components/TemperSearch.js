import React, { useContext } from "react";
import { AppContext } from "../App";
const TemperSearch = () => {
  const { setTemper, breeds } = useContext(AppContext);

  return (
    <>
      <div>
        <input
          name="temperText"
          type="text"
          placeholder="Desired temperament"
          onChange={(e) => setTemper(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default TemperSearch;

{
  /* <Box
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
      onChange={handleChange} //set. also allow to choose "other"
      helperText="Please select a desired temperament"
    >
      {tempers.map((temper, i) => {
        return (
          <MenuItem key={i} value={tempers.temper}>
            {breed.name}
          </MenuItem>
        );
      })}
    </TextField>
  </div>
</Box>; */
}

//array of arrays=> loop through and get two tempers of each array. every two should be unique.
