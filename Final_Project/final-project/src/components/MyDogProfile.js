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
    const checkExp = () => {
      const decoded = jwt_decode(accessToken.accessToken);
      const tokenExp = decoded.exp;

      if (tokenExp * 1000 < new Date().getTime()) {
        clearInterval(inter);
        setTimerMsg("your session is now expired. please login again");
        navigate("/login");
      }
    };
    const inter = setInterval(checkExp, 1000);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/images/paws.jpeg )",
        }}
      >
        <div>
          <h1>Welcome {userName}</h1>
        </div>
        <div>
          <UploadFile />
        </div>
      </div>
    </>
  );
};

export default MyDogProfile;
