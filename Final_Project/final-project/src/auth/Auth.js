import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { AppContext } from "../App";

export const Auth = (props) => {
  //   const [redirect, setRedirect] = useState(null);
  const { redirect, setRedirect } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(async () => {
    try {
      let response = await axios.get("http://localhost:5000/token", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      // console.log("auth response", response);
      setRedirect(1);
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  }, []);
  if (redirect) {
    return props.children;
  } else {
    // setRedirect("rejected");//doesnt work
    return null;
  } //set message: please login to enter your personal dog profile
};
