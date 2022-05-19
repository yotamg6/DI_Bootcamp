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

const SeeAllOtherDogs = () => {
  const { userName } = useContext(AppContext);
  const [othersFiles, setOthersFiles] = useState([]);

  const addToFavs = async (index) => {
    const selectedUser = othersFiles[index].username;
    const fileName = othersFiles[index].filename;

    try {
      const response = await axios.post("http://localhost:5000/dog-favs", {
        userName,
        selectedUser,
        fileName,
      });

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
      const response = await axios.post("http://localhost:5000/others-images", {
        userName,
      });

      setOthersFiles(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Grid
        alignItems="center"
        justifyContent="center"
        cols={2}
        rowheight={164}
      >
        <h1 className="matchTitles">Pick your favorites</h1>
        <ImageList sx={{ m: 1 }}>
          {othersFiles.map((file, i) => {
            return (
              <div key={i}>
                <ImageListItem key={i} sx={{ m: 1 }}>
                  <img
                    src={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format`}
                    srcSet={`http://localhost:5000/images/${file.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={file.filename}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{ backgroundColor: "#F5FFFA" }}
                    title={
                      <div className="bdDetails">
                        Dog name: {file.dogname} <br />
                        Breed: {file.breed} <br />
                        Temperament: {file.about_dog}
                      </div>
                    }
                    position="below"
                  />

                  <Button variant="contained" onClick={() => addToFavs(i)}>
                    Add to favorites
                  </Button>
                </ImageListItem>
              </div>
            );
          })}
        </ImageList>
      </Grid>
    </>
  );
};

export default SeeAllOtherDogs;
