import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

const UserBreedFavs = () => {
  const { userName, breeds } = useContext(AppContext);
  const [myBreedFavs, setMyBreedFavs] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.post("http://localhost:5000/mybreed-favs", {
        userName,
      });
      // console.log("response in userBreedFavs:", response.data);
      setMyBreedFavs(response.data);
    } catch (e) {
      console.log("error from getbreedfavs frontend:", e);
    }
  }, []);

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
