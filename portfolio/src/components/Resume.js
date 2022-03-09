import React from "react";

import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

const MainContainer = styled("div")(({}) => ({
  background: "#233",
}));

const TimeLine = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "1rem",
  margin: "o auto",
  "&:before": {
    content: "''",
    position: "absolute",
    height: "100%",
    border: "1px solid tan",
    right: "40px",
    top: 0,
  },
  "&:after": {
    content: "''",
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    "&:before": {
      left: "calc(50% - 1px)",
      right: "auto",
    },
  },
}));

const TimeLineItem = styled("div")(({ theme }) => ({
  padding: "1rem",
  borderBottom: "2px solid tan",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  "&:after": {
    content: "''",
    position: "absolute",
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    margin: "1rem",
    "&:nth-of-type(2n)": {
      margin: "1rem",
      borderColor: "tan",
    },
  },
}));

const TimeLineYear = styled("div")(({ theme }) => ({
  textAlign: "center",
  borderBottom: "2px solid tan",
  position: "relative",
  maxWidth: "12rem",
  margin: "0 3rem 0 auto",
  clear: "both",
  fontSize: "1.8rem",
  color: "#fff",
  background: "tomato",
  lineHeight: 1,
  padding: "0.5rem 1rem",
  "&:before": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    margin: "0 auto",
    "&:nth-of-type(2n)": {
      float: "none",
      margin: "0 auto",
    },
    "&:nth-of-type(2n):before": {
      display: "none",
    },
  },
}));

const Resume = () => {
  return (
    <MainContainer>
      <Typography variant="h4" align="center" className="heading">
        Working Experience
      </Typography>
      <TimeLine>
        <TimeLineYear>
          <Typography variant="h2">-2018</Typography>
        </TimeLineYear>

        <TimeLineItem
          style={{
            float: "right",
          }}
        >
          <Typography variant="h5" align="center" className="subHeading">
            Musician/Performer
          </Typography>
          <Typography variant="body1" align="center" className="body1">
            Violinist & storyteller
          </Typography>
          <Typography variant="subtitle1" align="center" className="subtitle1">
            Violinist from an early age, Yotam played on Europe's greatest
            stages with the world's finest ensembles, including Les Arts
            Florissants, Anima Eterna and the European Union Baroque Orchestra
            where he was the leader. Yotam holds degrees from the Jerusalem
            Academy of Music and Dance and the Royal Conservatory of the Hague
            where he completed his Master’s studies. Both as soloist and group
            member, he collaborated with the time's greatest early music artists
            such as Frans Bruggen, Masaaki Suzuki, William Christie, Lars Ulrik
            Mortensen, Rachel Podger, and many more
          </Typography>
        </TimeLineItem>
        <TimeLineYear>
          <Typography variant="h2">2018</Typography>
        </TimeLineYear>

        <TimeLineItem
          style={{
            float: "left",
          }}
        >
          <Typography variant="h5" align="center" className="subHeading">
            Director of Development and VP, Development
          </Typography>
          <Typography variant="body1" align="center" className="body1">
            Omri Foundation
          </Typography>
          <Typography variant="subtitle1" align="center" className="subtitle1">
            Omri Foundation is dedicated to fostering young and shared
            leadership in the northern district of Israel. Started in
            fundraisign, I have ended up having part in every section of the
            foundation, including strategy, content, development and mentoring
          </Typography>
        </TimeLineItem>
        <TimeLineYear>
          <Typography variant="h2">2020</Typography>
        </TimeLineYear>
        <TimeLineItem
          style={{
            float: "right",
          }}
        >
          <Typography variant="h5" align="center" className="subHeading">
            International Grants Manager
          </Typography>
          <Typography variant="body1" align="center" className="body1">
            Darca Schools
          </Typography>
          <Typography variant="subtitle1" align="center" className="subtitle1">
            The most prominent NGO in the field of highschool education in the
            periphery, I have joined Darca as part of a small team that was
            leading the entire fundraising section, having contributed directly
            to the success and continuation of several projects throughtout
            Israel
          </Typography>
        </TimeLineItem>
        <TimeLineYear>
          <Typography variant="h2">2021</Typography>
        </TimeLineYear>
        <TimeLineItem
          style={{
            float: "left",
          }}
        >
          <Typography variant="h5" align="center" className="subHeading">
            Programmer
          </Typography>
          <Typography variant="body1" align="center" className="body1">
            Developers Institute
          </Typography>
          <Typography variant="subtitle1" align="center" className="subtitle1">
            Long craved shift was finally made, as I became a programmer, after
            studying HTML, CSS, JS, PostgreSQL, NodeJS, React and Redux at the
            Developers Institue Bootcamp, where I have graduated in March 2022
          </Typography>
        </TimeLineItem>
      </TimeLine>
    </MainContainer>
  );
};

export default Resume;
