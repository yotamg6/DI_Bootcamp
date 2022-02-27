import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const UserDogFavs = () => {
  const { userName } = useContext(AppContext);
  const [myFavs, setMyFavs] = useState([]);

  useEffect(async () => {
    getMyFavs();
  }, []);

  const deleteFromFavs = async (userName, dogName) => {
    try {
      const response = await axios.post("http://localhost:5000/delete-dogfav", {
        userName,
        dogName,
      });
      toast.success("favorite removed successfully");
      getMyFavs();
    } catch (e) {
      console.log("error from deleteDogFavs", e);
    }
  };

  const getMyFavs = async () => {
    try {
      const response = await axios.post("http://localhost:5000/my-favs", {
        userName,
      });
      console.log("response in userDogFavs:", response.data);
      setMyFavs(response.data);
    } catch (e) {
      console.log("error from addtofavs:", e);
    }
  };

  return (
    <>
      <div>
        <h3>My Favorite dogs</h3>
        {myFavs.map((file, i) => {
          return (
            <div
              style={{
                display: "inline-block",
                width: "340px",
                height: "200px",
                margin: "10px",
              }}
            >
              <ImageList sx={{ width: 650, height: 450 }}>
                <ImageListItem key={i}>
                  <img
                    src={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format`}
                    srcSet={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={file.filename}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={
                      <span>
                        Dog breed: {file.breed} <br />
                        Dog name: {file.dogname} <br />
                        Temperament: {file.about_dog}
                      </span>
                    }
                    position="below"
                  />
                </ImageListItem>
                ;
              </ImageList>
              <Button
                variant="contained"
                onClick={() => deleteFromFavs(file.username, file.dogname)}
              >
                Remove dog from favorites
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserDogFavs;

{
  /* <div key={i} style={{ width: "80%" }}>
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
  <p>dog breed:{file.breed}</p>
  <p>dog name:{file.dogname}</p>
  <p>Temperament: {file.about_dog}</p> */
}
