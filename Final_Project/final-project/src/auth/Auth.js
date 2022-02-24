import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { AppContext } from "../App";

export const Auth = (props) => {
  const [redirect, setRedirect] = useState(null);
  let navigate = useNavigate();

  const { accessToken, userName, setTimerMsg } = useContext(AppContext);

  useEffect(async () => {
    console.log("accesstoken", accessToken);
    if (accessToken) {
      const decoded = jwt_decode(accessToken.accessToken);
      try {
        let response = await axios.get("http://localhost:5000/token", {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-access-token": accessToken,
          },
        });
        // console.log("auth response", response);
        setRedirect(1);
      } catch (e) {
        console.log(e);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [accessToken]);
  if (redirect) {
    return props.children;
  } else {
    return null;
  }
};
