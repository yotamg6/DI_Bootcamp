import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  let navigate = useNavigate();
  const logout = async () => {
    try {
      let response = await axios.get("http://localhost:5001/logout", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      navigate("/login");
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" component={Link} to="home">
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
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      </Stack>
    </>
  );
};

export default Nav;
