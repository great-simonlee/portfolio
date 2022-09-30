import * as React from "react"
import type {NextPage} from "next"
import {Box, Stack, Container, Divider, Typography, Paper} from "@mui/material"
import {gsap} from "gsap"
import Footer from "../components/layout/Footer"
import {styled} from "@mui/styles"

const Name = styled(Typography)({
  fontWeight: "bold",
})

const Home: NextPage = () => {
  const danielAreaRef = React.useRef<HTMLDivElement>(null)
  const simonAreaRef = React.useRef<HTMLDivElement>(null)
  const dividerRef = React.useRef<HTMLDivElement>(null)

  // React.useEffect(() => {
  //   gsap.to(dividerRef.current, 2, {x: 200, rotation: 360})
  // }, [dividerRef])

  const onHoverName = () => {
    gsap.to(dividerRef.current, 0.9, {rotate: 90})
    gsap.to(dividerRef.current, 0.9, {width: "500px", delay: 1})
    gsap.set(simonAreaRef.current, {x: 350, y: -80, delay: 2})
    gsap.to(simonAreaRef.current, {color: "#000", delay: 3})
  }

  return (
    <Container maxWidth="lg" sx={{height: "100%", width: "100%", position: "relative"}}>
      <Stack height="100%" alignItems="center">
        <Stack direction="row" height="100%" gap={3} justifyContent="center" alignItems="center">
          <Box component="div" onMouseOver={onHoverName} textAlign="start" ref={simonAreaRef} mb={30} sx={{zIndex: 10}}>
            <Name variant="h3">SIMON</Name>
          </Box>
          <Box
            ref={dividerRef}
            sx={{
              width: "3px",
              height: "100%",
              backgroundColor: "#fff",
              transform: "rotate(25deg)",
              zIndex: 0,
            }}
          />
          <Box textAlign="end" ref={danielAreaRef} mt={30} sx={{zIndex: 10}}>
            <Name variant="h3">DANIEL</Name>
          </Box>
        </Stack>
        <Footer />
      </Stack>
    </Container>
  )
}

export default Home
