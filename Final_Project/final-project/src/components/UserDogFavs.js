import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

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
                <p>dog breed:{file.breed}</p>
                <p>dog name:{file.dogname}</p>
                <p>Temperament: {file.about_dog}</p>
                <Button
                  variant="contained"
                  onClick={() => deleteFromFavs(file.username, file.dogname)}
                >
                  Remove dog from favorites
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserDogFavs;
