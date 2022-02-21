import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" component={Link} to="">
          Home
        </Button>
        <Button variant="outlined" component={Link} to="register">
          Register
        </Button>
        <Button variant="outlined" component={Link} to="login">
          Login
        </Button>
        <Button variant="outlined" component={Link} to="my-dog">
          My Dog Profile
        </Button>
        <Button variant="outlined" component={Link} to="dog-search">
          Breed search
        </Button>
        <Button variant="outlined" component={Link} to="find-match">
          Find a match
        </Button>
        <Button variant="outlined" component={Link} to="favorites">
          My-Favorites
        </Button>
      </Stack>
    </>
  );
};

export default Nav;
