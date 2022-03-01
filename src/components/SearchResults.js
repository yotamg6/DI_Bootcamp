import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grid,
} from "@mui/material";

const SearchResults = () => {
  const { breeds, matchIndexes, userName } = useContext(AppContext);

  const addToBreedFavs = async (index) => {
    const chosenBreedName = breeds[index].name;
    try {
      const response = await axios.post("http://localhost:5000/breed-favs", {
        userName,
        index,
      });
      // console.log("data from add to favbreeds", response.data);
      if (response.data) {
        toast.info("breed added successfully to favorites");
      } else {
        toast.warn("breed is already in your favorites");
      }
    } catch (e) {
      console.log("error from add to breedfavs", e);
    }
  };

  return (
    <>
      {matchIndexes.length > 0 ? (
        <Grid
          alignItems="center"
          justifyContent="center"
          cols={2}
          rowHeight={164}
        >
          <h1 className="matchTitles">My matching breeds</h1>
          <ImageList sx={{ m: 1 }}>
            {matchIndexes.map((index) => {
              // console.log(breeds[index].name);
              return (
                <div>
                  <ImageListItem key={index} sx={{ m: 1 }}>
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
                      onClick={() => addToBreedFavs(index)}
                    >
                      Add breed to my favorites
                    </Button>
                  </ImageListItem>
                </div>
              );
            })}
          </ImageList>
        </Grid>
      ) : (
        <div>No breed matches your search. please try again</div> // add alink to my-favorites
      )}
    </>
  );
};

export default SearchResults;

{
  /* <ImageList
          sx={{
            width: 1900,
            height: 860,
          }}
          cols={2}
          rowHeight={400} */
}

// <ImageListItem
//         key={index}
//         sx={{ mt: 5, mb: 20, p: 10, pb: 20 }}
//       ></ImageListItem>
