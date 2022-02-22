import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import AboutMyDog from "./AboutMyDog";

const UploadFile = () => {
  const { userName, userBreed, userDogName } = useContext(AppContext);
  const [imgValue, setImgValue] = useState("");
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
    const formData = new FormData();
    formData.append("dog_pic", imgValue);
    formData.append("userName", userName);
    formData.append("userBreed", userBreed);
    formData.append("userDogName", userDogName);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/uploads",
        formData
      );
      console.log("username:", data.data.filedata.username);
      setFileData(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <input
          type="file"
          name="dog_pic"
          accept=".jpg,.png"
          onChange={(e) => setImgValue(e.target.files[0])}
        />
        <AboutMyDog />
        <button onClick={uploadFile}>Upload</button>
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
                src={`http://localhost:5000/images/${data.filename}`} //not entirely sure why it works, simply because of app.use and express static?
              />
              <p>Dog breed: {data.breed}</p>
              <p>Dog name: {data.dogname}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

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
