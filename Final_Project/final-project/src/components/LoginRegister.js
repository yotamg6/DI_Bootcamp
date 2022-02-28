import React, { useState, useEffect, useContext } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../App";

const LoginRegister = ({ title }) => {
  const { setAccessToken, userName, setUserName, timerMsg, setTimerMsg } =
    useContext(AppContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState("");
  // const [value, setValue] = useState("");
  // const [userNameTxt, setUserNameTxt] = useState("");
  // const [emailTxt, setEmailTxt] = useState("");
  // const [passTxt, setPassTxt] = useState("");

  useEffect(() => {
    if (timerMsg) {
      toast.error(timerMsg);
      setTimerMsg(null);
    }
  }, []);

  const handleAction = async (id) => {
    // setUserName(userNameTxt);
    // setUserNameTxt("");
    // setEmail(emailTxt);
    // setEmailTxt("");
    // setPassword(passTxt);
    // setPassTxt("");

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
        // setMsg(e.response.data.msg);
        toast.error(e.response.data.msg);
      }
    } else if (id === "Login") {
      console.log(userName);
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
        await setAccessToken(response.data);
        navigate("/my-dog");
      } catch (e) {
        console.log("error from login:", e.response); //what is response?every e in catch has response?

        // setMsg(e.response.data.msg);
        toast.error(e.response.data.msg);
      }
    }
  };
  return (
    <div>
      <Grid
        container
        // spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            width: 300,
            height: 250,
            backgroundColor: "#E0FFFF",
          }}
        >
          <h1>Woof Cupid </h1>
          <h3 className="subTitle">
            The place to introduce your dog to their new love
          </h3>

          <div>
            {title === "Register" ? (
              <div>
                <p>Please register to start and meet new dogs</p>
              </div>
            ) : (
              <div>
                <div>Please login to start</div>
              </div>
            )}
          </div>
        </Box>
        <div>
          <Box component="form" sx={{ m: 1 }} noValidate autoComplete="off">
            <TextField
              sx={{ m: 1, backgroundColor: "#7FFFD4" }}
              id="username"
              label="enter username"
              variant="outlined"
              // value={userNameTxt}
              // onChange={(e) => setUserNameTxt(e.target.value)}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              sx={{ m: 1, backgroundColor: "#FFB6C1" }}
              id="email"
              label="enter your email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              // value={emailTxt}
              // onChange={(e) => setEmailTxt(e.target.value)}
            />
            <TextField
              sx={{ m: 1, backgroundColor: "#FFFFE0" }}
              id="password"
              label="enter password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              // value={passTxt}
              // onChange={(e) => setPassTxt(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={() => handleAction(title)}>
            {title}
          </Button>
        </div>
        {/* <div>{msg}</div> */}

        <div>
          {title === "Register" ? (
            <div>
              <p>Allready registered? please login</p>
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <div>
              <p className="referToRegis">
                <strong>
                  Can't login? please make sure to be registered first
                </strong>
              </p>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default LoginRegister;

// don't know how to clear the search fields
