import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const SeeAllOtherDogs = () => {
  const { userName } = useContext(AppContext);
  const [othersFiles, setOthersFiles] = useState([]);

  // const [selectedUser, setSelectedUser] = useState("test");

  const addToFavs = async (index) => {
    const selectedUser = othersFiles[index].username;
    const fileName = othersFiles[index].filename;
    // const uploadId = othersFiles[index].id;
    // console.log("uploadId:", uploadId);
    try {
      const response = await axios.post("http://localhost:5000/dog-favs", {
        userName,
        selectedUser,
        fileName,
      });
      // console.log("response in add to favs:", response.data);
      if (response.data) {
        toast.info("dog added successfully to favorites");
      } else {
        toast.warn("dog is already in your favorites");
      }
    } catch (e) {
      console.log("error from addtofavs:", e);
    }
  };

  useEffect(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/others-images",
        {
          userName,
        }
      );
      console.log("files from useEffect seeAllDogs:", response.data);
      setOthersFiles(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      {othersFiles.map((file, i) => {
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
                src={`http://localhost:5000/images/${file.filename}`}
              />
              <div>
                <p>Dog name: {file.dogname}</p>
                <p>Breed: {file.breed}</p>
                <p>Temperament: {file.about_dog}</p>
              </div>

              <Button variant="contained" onClick={() => addToFavs(i)}>
                Add to favorites
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeeAllOtherDogs;

// didnt know how to use the values set in effect in the click (tried conditional displaying, didnt work)
