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

      setMyFavs(response.data);
    } catch (e) {
      console.log("error from addtofavs:", e);
    }
  };

  return (
    <>
      {myFavs.length > 0 ? (
        <Grid
          alignItems="center"
          justifyContent="center"
          cols={2}
          rowheight={164}
        >
          <h3 className="matchTitles">My favorite dogs</h3>
          <ImageList sx={{ m: 1 }}>
            {myFavs.map((file, i) => {
              return (
                <div key={i}>
                  <ImageListItem sx={{ m: 1 }}>
                    <img
                      src={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format`}
                      srcSet={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={file.filename}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{ backgroundColor: "#F5FFFA" }}
                      title={
                        <span>
                          Dog breed: {file.breed} <br />
                          Dog name: {file.dogname} <br />
                          Temperament: {file.about_dog}
                        </span>
                      }
                      position="below"
                    />
                    <Button
                      variant="contained"
                      onClick={() =>
                        deleteFromFavs(file.username, file.dogname)
                      }
                    >
                      Remove dog from favorites
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

export default UserDogFavs;
