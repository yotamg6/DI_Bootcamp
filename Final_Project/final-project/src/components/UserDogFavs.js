import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

const UserDogFavs = () => {
  const { userName } = useContext(AppContext);
  const [myFavs, setMyFavs] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.post("http://localhost:5000/my-favs", {
        userName,
      });
      //   console.log("response in userDogFavs:", response.data);
      setMyFavs(response.data);
    } catch (e) {
      console.log("error from addtofavs:", e);
    }
  });

  return (
    <>
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserDogFavs;
