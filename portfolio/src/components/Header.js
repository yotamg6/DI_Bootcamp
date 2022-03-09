import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

import { Typography, Box, Grid } from "@mui/material";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend developper", "Backend developper"],
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Box className="typedContainer">
      <Grid container justify="center"></Grid>
      <Typography style={{ color: "#ffe4b5" }} variant="h3">
        YOTAM GATON
      </Typography>

      <Typography className="subtitle" variant="h4">
        <span ref={el}></span>
      </Typography>
    </Box>
  );
};

export default Header;
