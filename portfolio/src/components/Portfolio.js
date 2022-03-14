import React from "react";

import {
  Box,
  ImageList,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const projects = [
  {
    name: "Woof Cupid",
    description: `Dating website for dogs. Find the right breed for you and your dog, and match with other dogs accordingly. Finding true love has never been so precise! React, PostgreSQL, JWT, AWS S3, Sequelize, MUI`,
    img: "/project_screenshots/woof-cupid.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Final_Project/final-project",
    deployed: "https://woof-cupid.herokuapp.com/",
  },
  {
    name: "Movie-App",
    description: `Search any movie and get full details, including posters and links to IMDB. React, Redux`,
    img: "/project_screenshots/movie-app.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Week9/Day5/DailyChallenge/movie-app",
    video: "https://www.loom.com/share/9a286ebe4eed432ab9e193313de00221",
  },
  {
    name: "Tic-Tac-Toe",
    description: `The classic game with two play modes, including one against AI. can you beat the machine? React.js`,
    img: "/project_screenshots/tic-tac-toe.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Week10/Day1/exp2/tic-tac-toe",
    video: "https://loom.com/share/2f6136ea6d92448488686b68e5547ed5",
  },
  {
    name: "Guess Who I Am",
    description: `Try and guess who is the mysterious celebrity. Ask the program questions and you will be answered! Pure HTML, CSS, Javascript`,
    img: "/project_screenshots/guess-who.png",
    gitHub: "https://github.com/yotamg6/guess-who-I-am",
    video: "https://loom.com/share/f4bacf7855164c3d8ed0b036dff2ba40",
  },
];

const Portfolio = () => {
  return (
    <Grid
      container
      className="mainContainerFolio"
      justifyContent="center"
      alignItems="center"
      cols={2}
    >
      <Typography variant="h4" align="center" className="heading">
        Web-apps and games
      </Typography>
      <ImageList sx={{ m: 2 }}>
        {projects.map((project, i) => (
          <Box className="cardContainerFolio" key={i}>
            <CardMedia component="img" alt="Project img" src={project.img} />
            <CardContent>
              <Typography variant="h5" style={{ color: "tomato" }}>
                {project.name}
              </Typography>
              <Typography variant="body2" fontSize="17px">
                {project.description}
              </Typography>
            </CardContent>

            {project.deployed ? (
              <CardActions>
                <Link
                  href={`${project.deployed}`}
                  style={{ color: "#8D7B9C", fontWeight: "bold" }}
                  underline="none"
                >
                  DEMO
                </Link>
              </CardActions>
            ) : (
              <CardActions>
                <Link
                  href={`${project.video}`}
                  style={{ color: "#8D7B9C", fontWeight: "bold" }}
                  underline="none"
                >
                  DEMO
                </Link>
              </CardActions>
            )}
            <CardActions>
              <Link
                href={`${project.gitHub}`}
                style={{ color: "#8D7B9C", fontWeight: "bold" }}
                underline="none"
              >
                SOURCE CODE
              </Link>
            </CardActions>
          </Box>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Portfolio;
