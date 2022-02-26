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
  //   const goToPage = () => {
  //     // console.log("in go to");
  //     // setShowNav(false); //doesnt work
  //     // setTimerMsg("your session is now expired. please login again");
  //     // setAccessToken(null);
  //     // navigate("/login");
  //   };
  //   // setInterval(goToPage, 1000);
  //   // const timeOut = setTimeout(goToPage, 5000);
  // }, []);

  useEffect(() => {
    // setInterval(checkExp, 1000);//when calling the checExp from the setInterval (both are in the useEffect), the nav is not shown. On the other hand, when the useEffect is set to be called infinitly, it doesn't always call the function. Also, with the setinterval (set inside the useEffect), it calls the function even if we're logged out. with useEffect, it calls it once, and then repeatedly only after login in. Another big problem is that the page is shacking, preumably because it is constantly rerendered? I think it is the useEffect
    checkExp();
  });
  const checkExp = () => {
    // console.log("accesstoken  12345", accessToken);
    // console.log(new Date());

    if (accessToken) {
      const decoded = jwt_decode(accessToken.accessToken);
      // const usernameCookie = decoded.userName;
      const tokenExp = decoded.exp;

      if (tokenExp * 1000 < new Date().getTime()) {
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
      setShowNav(false); //doesnt work
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
