import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
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
      {/* <div
        style={
          {
            // display,
          }
        }
      >
        <h1>My matching breeds</h1> */}
      <h1>My matching breeds</h1>
      {matchIndexes.length > 0 ? (
        <ImageList
          sx={{
            width: 1900,
            height: 860,
            bgcolor: "#fff",
            backgroundImage: "url(http://localhost:3000/images/paws.jpeg )",
          }}
          cols={2}
          rowHeight={400}
        >
          {matchIndexes.map((index) => {
            // console.log(breeds[index].name);
            return (
              <div
                style={
                  {
                    // display: "inline-block",
                    // width: "600",
                    // height: "400",
                    // margin: "5px",
                    // justifyItems: "stretch",
                  }
                }
              >
                <ImageListItem
                  key={index}
                  sx={{ mt: 5, mb: 20, p: 10, pb: 20 }}
                >
                  <img
                    src={`${breeds[index].image.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${breeds[index].image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={breeds[index].image}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={
                      <span>
                        Breed: {breeds[index].name} <br />
                        Temperament:{breeds[index].temperament}
                      </span>
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
      ) : (
        <div>No breed matches your search. please try again</div> // add alink to my-favorites
      )}
      {/* </div> */}
    </>
  );
};

export default SearchResults;

{
  /* <div key={index}>
  <div
    style={{
      display: "inline-block",
      width: "300px",
      height: "200px",
      margin: "10px",
    }}
  >
    <h3>{breeds[index].name}</h3>
    <img
      style={{ height: "auto", maxWidth: "100%" }}
      src={breeds[index].image.url}
    ></img>
    <p>
      <strong>Temperament: </strong>
      {breeds[index].temperament}
    </p>
    <Button variant="contained" onClick={() => addToBreedFavs(index)}>
      Add breed to my favorites
    </Button>
  </div>
</div>; */
}
