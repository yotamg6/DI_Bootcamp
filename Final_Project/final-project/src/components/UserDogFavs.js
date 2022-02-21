import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

const UserDogFavs = () => {
  const { userName } = useContext(AppContext);

  useEffect(async () => {
    try {
      const response = await axios.post("http://localhost:5000/my-favs", {
        userName,
      });
      console.log("response in userDogFavs:", response.data);
    } catch (e) {
      console.log("error from addtofavs:", e);
    }
  });

  return (
    <>
      <div></div>
    </>
  );
};

export default UserDogFavs;
