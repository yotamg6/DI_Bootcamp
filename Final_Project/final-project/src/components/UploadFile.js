import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadFile = () => {
  const [imgValue, setImgValue] = useState("");
  const [fileData, setFileData] = useState({});
  const [imagesData, setImagesData] = useState([]);

  useEffect(async () => {
    try {
      const images = await axios.get("http://localhost:5000/api/images");
      console.log(images);
      setImagesData(images.data);
    } catch (e) {
      console.log(e);
    }
  }, [fileData]);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("dog_pic", imgValue);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/uploads",
        formData
      );
      console.log(data.data);
      setFileData(data.data.filedata);
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
        <button onClick={uploadImage}>Submit</button>
      </div>
      {imagesData.map((img, i) => {
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
                src={`http://localhost:5000/images/${img.filename}`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UploadFile;
