import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import AboutMyDog from "./AboutMyDog";
import { toast } from "react-toastify";
import { Button, Stack } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

import { styled } from "@mui/material/styles";

const UploadFile = () => {
  // const Input = styled("input")({
  //   display: "none",
  // });
  const {
    userName,
    userBreed,
    userDogName,
    aboutTextArea,
    setAboutTextArea,
    setNameValue,
    setSelectValue,
  } = useContext(AppContext);
  const [imgValue, setImgValue] = useState(null);
  const [fileData, setFileData] = useState({});
  const [myUploads, setMyUploads] = useState([]);

  useEffect(async () => {
    try {
      const images = await axios.post("http://localhost:5000/my-images", {
        userName,
      });
      console.log(images.data);
      setMyUploads(images.data);
    } catch (e) {
      console.log(e);
    }
  }, [fileData]);

  const deleteMyDog = async (username) => {
    try {
      const response = await axios.post("http://localhost:5000/delete-mydog", {
        username,
      });
      // console.log("deletemydog", response.data);
      toast.info(response.data.msg);
      setFileData({});
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async () => {
    setAboutTextArea("");
    setNameValue("");
    setSelectValue("");
    if (!imgValue) return toast.error(`please upload your dog's picture`);
    const formData = new FormData();
    formData.append("dog_pic", imgValue);
    formData.append("userName", userName);
    formData.append("userBreed", userBreed);
    formData.append("userDogName", userDogName);
    formData.append("aboutTextArea", aboutTextArea);
    try {
      const data = await axios.post("http://localhost:5000/uploads", formData);
      console.log("username:", data.data.filedata.username);
      setFileData(data.data);
    } catch (e) {
      // console.log(e.response.data.msg);
      toast.error(e.response.data.msg);
    }
  };

  return (
    <>
      {myUploads.length > 0 ? (
        <div style={{ width: "80%" }}>
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
              src={`http://localhost:5000/images/${myUploads[0].filename}`}
            />
            <p>Dog breed: {myUploads[0].breed}</p>
            <p>Dog name: {myUploads[0].dogname}</p>
            <p>About my dog: {myUploads[0].about_dog}</p>
            <Button
              variant="contained"
              component="span"
              startIcon={<DeleteIcon />}
              onClick={() => deleteMyDog(myUploads[0].username)}
            >
              Reset details
            </Button>
          </div>
        </div>
      ) : null}

      <div>
        <Stack direction="column" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <input
              type="file"
              name="dog_pic"
              id="contained-button-file"
              multiple
              accept="image/*"
              onChange={(e) => setImgValue(e.target.files[0])}
              hidden
            />
            <Button
              variant="contained"
              component="span"
              startIcon={<PhotoCamera />}
            >
              Upload image
            </Button>
          </label>
          <AboutMyDog />
          <Button variant="contained" onClick={uploadFile}>
            Upload
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default UploadFile;

{
  /* <ImageList sx={{ width: 500, height: 450 }}>
{myUploads.map((data, i) => {
        <ImageListItem key={i}>
          <img
            src={`http://localhost:5000/images/${data.filename}?w=248&fit=crop&auto=format`}
            srcSet={`http://localhost:5000/images/${data.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={data.filename}
            loading="lazy"
          />
          <ImageListItemBar
            title= {<span>Dog breed: {data.breed}</span>}
            title= {<span>Dog name: {data.dogname}</span>}
            subtitle={<span>About dog: {data.about_dog}</span>}
            position="below"
          />
        </ImageListItem>
    })}
    </ImageList>
  );
} */
}

// {myUploads.map((data, i) => {
//   return (
//     <div key={i} style={{ width: "80%" }}>
//       <div
//         style={{
//           display: "inline-block",
//           width: "300px",
//           height: "200px",
//           margin: "10px",
//         }}
//       >
//         <img
//           style={{ height: "auto", maxWidth: "100%" }}
//           src={`http://localhost:5000/images/${data.filename}`}
//         />
//         <p>Dog breed: {data.breed}</p>
//         <p>Dog name: {data.dogname}</p>
//         <p>About my dog: {data.about_dog}</p>
//       </div>
//     </div>
//   );
// })}

{
  /* {myUploads.map((data, i) => { */
}
{
  /* return ( */
}
{
  /* <div key={i} style={{ width: "80%" }}> */
}
{
  /* <div style={{ width: "80%" }}>
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
            // src={`http://localhost:5000/images/${data.filename}`}
            src={`http://localhost:5000/images/${myUploads[0].filename}`}
          />
          <p>Dog breed: {myUploads[myUploads.length].breed}</p>
          <p>Dog name: {myUploads[0].dogname}</p>
          <p>About my dog: {myUploads[0].about_dog}</p>
          {/* <p>Dog breed: {data.breed}</p>
              <p>Dog name: {data.dogname}</p>
              <p>About my dog: {data.about_dog}</p> */
}
{
  /* </div>
      </div> */
}
{
  /* ); */
}
{
  /* })} */
}

{
  /* <p>Dog breed: {data.breed}</p>
              <p>Dog name: {data.dogname}</p>
              <p>About my dog: {data.about_dog}</p> */
}

// src={`http://localhost:5000/images/${data.filename}`}
