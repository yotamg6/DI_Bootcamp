import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadFile = () => {
  const [imgValue, setImgValue] = useState("");
  const [fileData, setFileData] = useState({});

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("dog_pic", imgValue);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/uploads",
        formData
      );
      console.log(data.data);
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
    </>
  );
};

export default UploadFile;
