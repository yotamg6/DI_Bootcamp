import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UploadFile from "./UploadFile";
import { AppContext } from "../App";
import axios from "axios";

const MyDogProfile = () => {
  const { accessToken, userName, setTimerMsg } = useContext(AppContext);

  let navigate = useNavigate();

  useEffect(() => {
    const decoded = jwt_decode(accessToken.accessToken);
    const tokenExp = decoded.exp;
    // console.log(new Date((tokenExp - 60) * 1000));
    if (tokenExp * 1000 < new Date().getTime()) {
      console.log("time is over");
      // setTimerMsg("your session is now expired. please login again");
      navigate("/login");
      //I should set a timer to be redirected. after the required time (now 60) I could call the verify token, or just navigate
    }
  });
  return (
    <>
      <div>
        <h1>Welcome {userName}</h1>
      </div>
      <div>
        <UploadFile />
      </div>
    </>
  );
};

export default MyDogProfile;
