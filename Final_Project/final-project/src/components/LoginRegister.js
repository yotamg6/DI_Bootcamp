import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LoginRegister = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userName, setUserName] = useState("");
  const handleAction = (id) => {
    console.log(id);
    if (id == "Register") {
    } else if (id == "Login") {
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
      <div>{msg}</div>
      {/*email doesnotexist/exists please register/login*/}
      <div>
        {title == "Register" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
