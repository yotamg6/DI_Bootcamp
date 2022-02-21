import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UploadFile from "./UploadFile";
import { AppContext } from "../App";

const MyDogProfile = () => {
  const [expiration, setExpiration] = useState("");

  const { accessToken, userName } = useContext(AppContext);

  let navigate = useNavigate();

  useEffect(() => {
    const decoded = jwt_decode(accessToken.accessToken);
    const tokenExp = decoded.exp;
    console.log(new Date((tokenExp - 60) * 1000));
    if (tokenExp * 1000 < new Date().getTime()) {
      console.log("time is over");
      navigate("/login"); //is it suppose to navigate to login, 60s from the moment we are in the page? doesnt work, I think maybe because new Date is static?
    }
    //   // setExpiration();
  }, []);
  return (
    <>
      <div>
        <h1>Welcome {userName}</h1>
      </div>
      <div>
        <UploadFile />
      </div>
    </>
  );
};

export default MyDogProfile;
