import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const UserBreedFavs = () => {
  const { userName, breeds } = useContext(AppContext);
  const [myBreedFavs, setMyBreedFavs] = useState([]);
  // const [msg, setMsg] = useState(null);
  useEffect(async () => {
    getMyBreedFavs();
  }, []);

  const deleteFromBreedFavs = async (breedIndex) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/delete-breedfav",
        {
          userName,
          breedIndex,
        }
      );
      // console.log("response in deleteFromBreedFavs", response.data);
      toast.success("favorite removed successfully");
      getMyBreedFavs();
    } catch (e) {
      console.log("error from deleteFromBreedFavs", e);
    }
  };

  const getMyBreedFavs = async () => {
    try {
      const response = await axios.post("http://localhost:5000/mybreed-favs", {
        userName,
      });
      console.log("response in getMyBreedFavs:", response.data);
      setMyBreedFavs(response.data);
    } catch (e) {
      console.log("error getMyBreedFavs:", e);
    }
  };

  return (
    <>
      <div>
        <h3>My favorite breeds</h3>
        {myBreedFavs.length > 0
          ? myBreedFavs.map((indexObj) => {
              const index = indexObj.breed_index;
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "inline-block",
                      width: "300px",
                      height: "200px",
                      margin: "10px",
                    }}
                  >
                    <p>{breeds[index].name}</p>
                    <img
                      style={{ height: "auto", maxWidth: "100%" }}
                      src={breeds[index].image.url}
                    ></img>
                    <p>
                      <strong>Temperament: </strong>
                      {breeds[index].temperament}
                    </p>
                    <Button
                      variant="contained"
                      onClick={() => deleteFromBreedFavs(index)}
                    >
                      Remove breed from favorites
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default UserBreedFavs;
