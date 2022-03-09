import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <BottomNavigation style={{ background: "#2f4f4f" }}>
      <BottomNavigationAction
        icon={<Facebook />}
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
            },
          },
        }}
      />
    </BottomNavigation>
  );
};
export default Footer;
