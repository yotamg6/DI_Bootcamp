import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UploadFile from "./UploadFile";
import { AppContext } from "../App";
import axios from "axios";
import { Button, Stack, Grid } from "@mui/material";

const MyDogProfile = () => {
  const { accessToken, userName, setTimerMsg } = useContext(AppContext);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h1 className="welcomeUser">Welcome {userName}</h1>
        </div>
        <div className="subTitle">
          <strong> if you haven’t done so yet, please refer to the </strong>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/breed-search"
          >
            Breed search
          </Button>
          <strong>section</strong>
          <strong>
            <p> to see what breed is the right one for a match to your dog </p>
          </strong>
        </div>
        <div>
          <UploadFile />
        </div>
      </Grid>
    </>
  );
};

export default MyDogProfile;
