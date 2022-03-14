import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { styled } from "@mui/system";

import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Send from "@mui/icons-material/Send";

const InputField = styled("div")({
  "& label.Mui-focused": {
    color: "tomato",
  },
  "& label": {
    color: "tan",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "tan",
    },
    "&:hover fieldset": {
      borderColor: "tan",
    },
    "&.Mui-focused fieldset": {
      color: "#fff",
      borderColor: "tan",
    },
  },
});

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const formId = "l06Uyd3g";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const handleChange = (e) => {
    if (e.target.id == "name") {
      setNameValue(e.target.value);
      setUserName(e.target.value);
    } else if (e.target.id == "email") {
      setEmailValue(e.target.value);
      setEmail(e.target.value);
    } else {
      setMessageValue(e.target.value);
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (nameValue !== "" && emailValue !== "" && messageValue !== "") {
      await postSubmission();
    } else {
      toast.error("please fill-in all fields");
    }
  };

  const postSubmission = async () => {
    const payload = {
      username: userName,
      email: email,
      message: message,
    };
    try {
      const response = await axios.post(formSparkUrl, payload);
      // console.log(response);
      toast.success("your message has been sent successfully");
      setMessageValue("");
      setEmailValue("");
      setNameValue("");
    } catch (e) {
      console.log("from postSubmission", e);
      toast.error("something went wrong, please try again");
      setMessageValue("");
      setEmailValue("");
      setNameValue("");
    }
  };

  return (
    <Box component="div" className="contactContainer">
      <Grid container justify="center" style={{ minWidth: "100vh" }}>
        <Box component="form" className="form">
          <Typography variant="h5" className="formHeading">
            contact page
          </Typography>
          <InputField className="field">
            <TextField
              sx={{ input: { color: "white" } }}
              id="name"
              label="Name"
              variant="outlined"
              value={nameValue}
              fullWidth={true}
              onChange={handleChange}
            />
          </InputField>
          <InputField className="field">
            <TextField
              sx={{ input: { color: "white" } }}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth={true}
              value={emailValue}
              onChange={handleChange}
            />
          </InputField>
          <InputField className="field">
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              fullWidth={true}
              multiline
              InputProps={{ style: { color: "white" } }}
              rows={4}
              value={messageValue}
              onChange={handleChange}
            />
          </InputField>

          <Button
            style={{ color: "tomato", borderColor: "tan" }}
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            onClick={handleSubmit}
          >
            Contact Me
          </Button>

          <InputField className="field">
            <Typography variant="h6" className="email">
              <AlternateEmailIcon style={{ color: "white" }} />{" "}
              yotamg6@gmail.com
            </Typography>
          </InputField>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
