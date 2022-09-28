import * as React from "react";
import { Box, Stack, Container } from "@mui/material";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
      <Container maxWidth="lg">
        <Stack justifyContent="center">{children}</Stack>
      </Container>
      <NavBar />
    </Stack>
  );
};

export default Layout;
