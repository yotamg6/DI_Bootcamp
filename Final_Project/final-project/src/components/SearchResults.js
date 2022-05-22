import React, { useContext } from "react";
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
      <Grid
        alignItems="center"
        justifyContent="center"
        cols={2}
        rowheight={164}
      >
        <h1 className="matchTitles">My matching breeds</h1>
        {matchIndexes.length > 0 ? (
          <ImageList sx={{ m: 1 }}>
            {matchIndexes.map((index) => {
              return (
                <div key={index}>
                  <ImageListItem sx={{ m: 1 }}>
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
        ) : (
          <div
            className="subTitle"
            style={{ height: "60rem", fontSize: "50px" }}
          >
            <div>No breed matches your search</div>
            <div>please try again</div>
            <img
              src="/images/sad-dog.jpeg"
              style={{ height: "600px", width: "350px" }}
            />
          </div>
        )}
      </Grid>
    </>
  );
};

export default SearchResults;
