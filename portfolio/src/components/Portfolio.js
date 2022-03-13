import React from "react";
// import { Link } from "react-router-dom";

import {
  Box,
  Button,
  ImageList,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const projects = [
  {
    name: "Woof Cupid",
    description: `Dating website for dogs. Find the right breed for you and your dog, and match with other dogs accordingly. Finding true love has never been so precise! React, JWT, PostgreSQL, Sequelize, MUI`,
    url: "http://localhost:3000/project_screenshots/woof-cupid.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Final_Project/final-project",
    deployed: "https://woof-cupid.herokuapp.com/",
  },
  {
    name: "Movie-App",
    description: `Search any movie and get full details, including posters and links to IMDB. React, Redux`,
    url: "http://localhost:3000/project_screenshots/movie-app.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Week9/Day5/DailyChallenge/movie-app",
    deployed: "",
  },
  {
    name: "Tic-Tac-Toe",
    description: `The classic game with two play modes, including one against AI. can you beat the machine? React.js`,
    url: "http://localhost:3000/project_screenshots/tic-tac-toe.png",
    gitHub:
      "https://github.com/yotamg6/DI_Bootcamp/tree/master/Week10/Day1/exp2/tic-tac-toe",
    deployed: "",
  },
  {
    name: "Guess Who I Am",
    description: `Try and guess who is the mysterious celebrity. Ask the program questions and you will be answered! Pure HTML, CSS, Javascript`,
    url: "http://localhost:3000/project_screenshots/guess-who.png",
    gitHub: "https://github.com/yotamg6/guess-who-I-am",
    deployed: "",
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
            <CardMedia component="img" alt="Project img" image={project.url} />
            <CardContent>
              <Link underline="none" href={`${project.deployed}`}>
                <Typography variant="h5" style={{ color: "tomato" }}>
                  {project.name}
                </Typography>
              </Link>
              <Typography variant="body2" fontSize="17px">
                {project.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Link href={`${project.gitHub}`}>Source code</Link>
            </CardActions>
            {/* <Button size="small" color="primary">
                  Live Demo
                </Button>
            </CardActions>  */}
          </Box>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Portfolio;
