import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { toast } from "react-toastify";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grid,
} from "@mui/material";

const UserBreedFavs = () => {
  const { userName, breeds } = useContext(AppContext);
  const [myBreedFavs, setMyBreedFavs] = useState([]);
  
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
      {myBreedFavs.length > 0 ? (
        <Grid
          alignItems="center"
          justifyContent="center"
          cols={2}
          rowHeight={164}
        >
          <h3 className="matchTitles">My favorite breeds</h3>
          <ImageList sx={{ m: 1 }}>
            {myBreedFavs.map((indexObj) => {
              const index = indexObj.breed_index;
              return (
                <div>
                  <ImageListItem sx={{ m: 1 }} key={index}>
                    <img
                      src={`${breeds[index].image.url}?w=248&fit=crop&auto=format`}
                      srcSet={`${breeds[index].image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={breeds[index].image}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{ backgroundColor: "#F5FFFA" }}
                      title={
                        <div className="bdDetails">
                          Breed: {breeds[index].name} <br />
                          Temperament:{breeds[index].temperament}
                        </div>
                      }
                      position="below"
                    />
                    <Button
                      variant="contained"
                      onClick={() => deleteFromBreedFavs(index)}
                    >
                      Remove breed from favorites
                    </Button>
                  </ImageListItem>
                </div>
              );
            })}
          </ImageList>
        </Grid>
      ) : null}
    </>
  );
};

export default UserBreedFavs;