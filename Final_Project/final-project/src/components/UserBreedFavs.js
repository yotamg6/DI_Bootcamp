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
        {myBreedFavs.length > 0 ? (
          <div>
            <h3>My favorite breeds</h3>

            {myBreedFavs.map((indexObj) => {
              const index = indexObj.breed_index;
              return (
                // <div key={index} style={{ width: "80%" }}>
                <div
                  style={{
                    display: "inline-block",
                    width: "720px",
                    height: "350px",
                    margin: "30px",
                  }}
                >
                  <ImageList sx={{ width: 1300, height: 550 }}>
                    <ImageListItem key={index}>
                      <img
                        src={`${breeds[index].image.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${breeds[index].image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={breeds[index].image}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={
                          <span>
                            Temperament:{breeds[index].temperament} <br />
                            Breed: {breeds[index].name}
                          </span>
                        }
                        position="below"
                      />
                    </ImageListItem>
                  </ImageList>

                  <Button
                    variant="contained"
                    onClick={() => deleteFromBreedFavs(index)}
                  >
                    Remove breed from favorites
                  </Button>
                </div>
                // </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UserBreedFavs;

// {
//   myFavs.map((file, i) => {
//     return (
//       <div
//         style={{
//           display: "inline-block",
//           width: "300px",
//           height: "200px",
//           margin: "10px",
//         }}
//       >
//         <ImageList sx={{ width: 650, height: 450 }}>
//           <ImageListItem key={i}>
//             <img
//               src={`${breeds[index].image.url}?w=248&fit=crop&auto=format`}
//               srcSet={`${breeds[index].image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={file.filename}
//               loading="lazy"
//             />
//             <ImageListItemBar
//               title={<span>Temperament:{breeds[index].temperament}</span>}
//               title={<span>Dog name: {breeds[index].name}</span>}
//               position="below"
//             />
//           </ImageListItem>
//           ;
//         </ImageList>
//         <Button
//           variant="contained"
//           onClick={() => deleteFromFavs(file.username, file.dogname)}
//         >
//           Remove dog from favorites
//         </Button>
//       </div>
//     );
//   });
// }

{
  /* <p> {breeds[index].name} </p> */
}
{
  /* <img
                      style={{ height: "auto", maxWidth: "100%" }}
                      src={breeds[index].image.url}
                    ></img> */
}
{
  /* <p>
                      <strong>Temperament: </strong>
                      {breeds[index].temperament}
                    </p> */
}
