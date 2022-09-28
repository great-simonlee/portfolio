import React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Box height="100%" sx={{ backgrounColor: "#bdbdbd" }}>
      <AppBar
        position="static"
        sx={{ height: "100%", backgroundColor: "#bdbdbd" }}
      >
        <Toolbar>
          <IconButton size="small">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
