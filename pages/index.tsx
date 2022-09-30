import type {NextPage} from "next"
import {Box, Stack, Container} from "@mui/material"
import Footer from "../components/layout/Footer"

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" sx={{height: "100%", width: "100%"}}>
      <Stack alignItems="center" height="100%">
        <Box height="100%">zz</Box>
        <Footer />
      </Stack>
    </Container>
  )
}

export default Home
