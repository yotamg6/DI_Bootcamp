import React, { useState, useEffect, useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AppContext } from "../App";

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const { setAccessToken, accessToken, setTimerMsg } = useContext(AppContext);
  let navigate = useNavigate();
  // useEffect(() => {
  //   checkExp();
  // }, []);
  useEffect(() => {
    checkExp();
  });
  const checkExp = () => {
    // console.log("accesstoken  12345", accessToken);
    if (accessToken) {
      const decoded = jwt_decode(accessToken.accessToken);
      const usernameCookie = decoded.userName;
      // console.log("usernamecookie", usernameCookie);
      const tokenExp = decoded.exp;
      // console.log(new Date((tokenExp - 60) * 1000));
      if (tokenExp * 1000 < new Date().getTime()) {
        setTimerMsg("your session is now expired. please login again");

        setAccessToken(null);
        setShowNav(false);
        //I should set a timer to be redirected. after the required time (now 60) I could call the verify token, or just navigate
      } else {
        setShowNav(true);
      }
    } else {
      setShowNav(false);
    }
  };
  const logout = async () => {
    try {
      let response = await axios.get("http://localhost:5001/logout", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-access-token": accessToken,
        },
      });
      // console.log(response);
      navigate("/login");
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };
  if (showNav) {
    return (
      <>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" component={Link} to="home">
            Home
          </Button>
          <Button variant="outlined" component={Link} to="register">
            Register
          </Button>
          <Button variant="outlined" component={Link} to="login">
            Login
          </Button>
          <Button variant="outlined" component={Link} to="my-dog">
            My Dog Profile
          </Button>
          <Button variant="outlined" component={Link} to="dog-search">
            Breed search
          </Button>
          <Button variant="outlined" component={Link} to="find-match">
            Find a match
          </Button>
          <Button variant="outlined" component={Link} to="favorites">
            My-Favorites
          </Button>
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        </Stack>
      </>
    );
  } else return null;
};

export default Nav;
