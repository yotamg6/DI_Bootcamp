import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import AboutMyDog from "./AboutMyDog";
import { toast } from "react-toastify";
import { Button, Stack, Grid, Box } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const UploadFile = () => {
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
  const [showInputFields, setShowInputFields] = useState(true);

  useEffect(async () => {
    try {
      const images = await axios.post("http://localhost:5000/my-images", {
        userName,
      });
      setMyUploads(images.data);
      if (images.data.length > 0) setShowInputFields(false);
      else setShowInputFields(true);
    } catch (e) {
      console.log(e);
    }
  }, [fileData]);

  const deleteMyDog = async (username) => {
    setShowInputFields(true);
    try {
      const response = await axios.post("http://localhost:5000/delete-mydog", {
        username,
      });
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

      setFileData(data.data);
    } catch (e) {
      toast.error(e.response.data.msg);
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "75vh" }}
      >
        {myUploads.length > 0 ? (
          <Box
            sx={{
              width: 500,
              height: 500,
              backgroundColor: "#E0FFFF",
            }}
          >
            <img
              style={{ height: "auto", maxWidth: "100%" }}
              src={`http://localhost:5000/images/${myUploads[0].filename}`}
            />
            <div
              className="subTitle"
              style={{ margin: "10px", padding: "10px" }}
            >
              <div>
                <span style={{ color: "red" }}>Dog name: </span>
                {myUploads[0].dogname}
              </div>
              <div>
                <span style={{ color: "red" }}>Dog breed: </span>
                {myUploads[0].breed}
              </div>
              <div>
                <span style={{ color: "red" }}>About my dog: </span>
                {myUploads[0].about_dog}
              </div>
            </div>

            <Button
              variant="contained"
              component="span"
              startIcon={<DeleteIcon />}
              onClick={() => deleteMyDog(myUploads[0].username)}
            >
              Reset details
            </Button>
          </Box>
        ) : null}
        {showInputFields ? (
          <div>
            <Stack direction="column" alignItems="center" spacing={2}>
              <h2>Please add details about your dog</h2>
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
              <Button
                variant="contained"
                startIcon={<SendIcon />}
                onClick={uploadFile}
              >
                Send
              </Button>
            </Stack>
          </div>
        ) : null}
      </Grid>
    </>
  );
};

export default UploadFile;
