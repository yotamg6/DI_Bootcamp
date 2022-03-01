import UserBreedFavs from "./UserBreedFavs";
import UserDogFavs from "./UserDogFavs";
import { Box, Grid } from "@mui/material";
const Favorites = () => {
  return (
    <>
      <div>
        <h1>My Favorites</h1>

        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 300,
              height: 250,
              backgroundColor: "#E0FFFF",
            }}
          >
            <p className="subTitle">
              Compare between the right breed for you, and the dogs you liked
              the most.
            </p>
            <p className="subTitle">
              <strong> Which one will be your dog's next great love??? </strong>
            </p>
          </Box>
        </Grid>
        <UserBreedFavs />
        <UserDogFavs />
      </div>
    </>
  );
};

export default Favorites;
