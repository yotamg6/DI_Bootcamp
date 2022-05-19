import React, { useState, useEffect, useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AppContext } from "../App";
let inter;
const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const { setAccessToken, accessToken, setTimerMsg } = useContext(AppContext);
  let navigate = useNavigate();

  const checkExp = () => {
    if (accessToken) {
      const decoded = jwt_decode(accessToken.accessToken);
      const tokenExp = decoded.exp;
      if (tokenExp * 1000 < new Date().getTime()) {
        clearInterval(inter);
        setTimerMsg("your session is now expired. please login again");
        setAccessToken(null);
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    checkExp();
  }, []);

  useEffect(() => {
    if (accessToken) inter = setInterval(checkExp, 1000);
  }, [accessToken]);

  const logout = async () => {
    try {
      let response = await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-access-token": accessToken,
        },
      });
      setShowNav(false);
      clearInterval(inter);
      setAccessToken(null);
      navigate("/login");
    } catch (e) {
      clearInterval(inter);
      setShowNav(false);
      setAccessToken(null);
      navigate("/login");
    }
  };
  if (showNav) {
    return (
      <>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" component={Link} to="register">
            Register
          </Button>
          <Button variant="contained" component={Link} to="login">
            Login
          </Button>
          <Button variant="contained" component={Link} to="my-dog">
            My Dog Profile
          </Button>
          <Button variant="contained" component={Link} to="breed-search">
            Breed search
          </Button>
          <Button variant="contained" component={Link} to="find-match">
            Find a match
          </Button>
          <Button variant="contained" component={Link} to="favorites">
            My-Favorites
          </Button>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </Stack>
      </>
    );
  } else return null;
};

export default Nav;
