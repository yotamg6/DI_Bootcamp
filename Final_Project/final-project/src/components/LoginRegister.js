import React, { useState, useEffect, useContext } from "react";
import { Button, Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../App";

const LoginRegister = ({ title }) => {
  const { setAccessToken, redirect, userName, setUserName } =
    useContext(AppContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   if (redirect == "rejected")
  //     toast.error("please login to enter your personal dog profile");
  // }, []);

  const handleAction = async (id) => {
    // console.log(id);
    if (id === "Register") {
      try {
        let response = await axios.post(
          "http://localhost:5000/register",
          {
            userName,
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        console.log("register:", response.data);
        toast.success(response.data.msg);
        navigate("/login");
      } catch (e) {
        console.log("register:", e.response.data);
        setMsg(e.response.data.msg);
        toast.error(e.response.data.msg);
      }
    } else if (id === "Login") {
      try {
        let response = await axios.post(
          "http://localhost:5000/login",
          {
            userName,
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        // console.log("login:", response);
        toast.success("Login successful!");
        setAccessToken(response.data);
        navigate("/my-dog");
      } catch (e) {
        console.log("error from login:", e.response); //what is response?every e in catch has response?
        //the server crashes if the password is wrong, solve it
        setMsg(e.response.data.msg);
        toast.error(e.response.data.msg);
      }
    }
  };
  return (
    <div>
      <div>
        <div>
          <h2> {title}</h2>
        </div>
        <Box component="form" sx={{ m: 1 }} noValidate autoComplete="off">
          <TextField
            sx={{ m: 1 }}
            id="username"
            label="enter user-name"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="email"
            label="enter your email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="password"
            label="enter password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={() => handleAction(title)}>
          {title}
        </Button>
      </div>
      {/* <div>{msg}</div> */}

      <div>
        {title === "Register" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
