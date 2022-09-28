import type { NextPage } from "next";
import { Stack, Box, Container, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box width="100%">
      <Container maxWidth="md">
        <Stack>
          <Typography fontSize="50px">Welcome To LeeBro's Portfolio</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
