import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import AboutMyDog from "./AboutMyDog";
import { toast } from "react-toastify";
import { Button, IconButton, Input, Stack } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera"; //doesnt work, need to download?
import { styled } from "@mui/material/styles";

const UploadFile = () => {
  const Input = styled("input")({
    display: "none",
  });
  const { userName, userBreed, userDogName, aboutTextArea } =
    useContext(AppContext);
  const [imgValue, setImgValue] = useState(null);
  const [fileData, setFileData] = useState({});
  const [myUploads, setMyUploads] = useState([]);

  useEffect(async () => {
    try {
      const images = await axios.post("http://localhost:5000/api/my-images", {
        userName,
      });
      console.log(images.data);
      setMyUploads(images.data);
    } catch (e) {
      console.log(e);
    }
  }, [fileData]);

  const uploadFile = async () => {
    if (!imgValue) return toast.error(`please upload your dog's picture`);
    const formData = new FormData();
    formData.append("dog_pic", imgValue);
    formData.append("userName", userName);
    formData.append("userBreed", userBreed);
    formData.append("userDogName", userDogName);
    formData.append("aboutTextArea", aboutTextArea);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/uploads",
        formData
      );
      // console.log("username:", data.data.filedata.username);
      setFileData(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="icon-button-file">
            <Input
              accept=".jpg,.png"
              id="dog_pic"
              type="file"
              onChange={(e) => setImgValue(e.target.files[0])}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Stack>
        <AboutMyDog />
        <Button variant="contained" onClick={uploadFile}>
          Upload
        </Button>
      </div>
      {myUploads.map((data, i) => {
        return (
          <div key={i} style={{ width: "80%" }}>
            <div
              style={{
                display: "inline-block",
                width: "300px",
                height: "200px",
                margin: "10px",
              }}
            >
              <img
                style={{ height: "auto", maxWidth: "100%" }}
                src={`http://localhost:5000/images/${data.filename}`}
              />
              <p>Dog breed: {data.breed}</p>
              <p>Dog name: {data.dogname}</p>
              <p>About my dog: {data.about_dog}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <label htmlFor="icon-button-file">
//         <Input accept=".jpg,.png" id="dog_pic" type="file" onChange={(e) => setImgValue(e.target.files[0])} />
//         <IconButton color="primary" aria-label="upload picture" component="span">
//           <PhotoCamera />
//         </IconButton>
//       </label>
//     </Stack>
//   );
// } --- delete

export default UploadFile;

// useEffect(async () => {
//   try {
//     const images = await axios.get("http://localhost:5000/api/images");
//     console.log(images);
//     setImagesData(images.data);
//   } catch (e) {
//     console.log(e);
//   }
// }, [fileData]);

{
  /* <input
          type="file"
          name="dog_pic"
          accept=".jpg,.png"
          onChange={(e) => setImgValue(e.target.files[0])}
        /> */
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';
