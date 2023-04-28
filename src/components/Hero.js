import React from "react";
import "./Hero.css";
import Box from "@mui/material/Box";
import homepageimg from "../assets/images/Homepage/01-1m.jpeg";
import homepageimg19 from "../assets/images/Homepage/landing-page01.jpg";

import { Container, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item md={5}>
            <Box>
              <Typography variant="h4" pt={28.5}>
                <span className="span-brand-color">What</span> we do?
              </Typography>
              <Typography variant={"body1"} pt={1}>
                We specialize in creating unique and personalized interior
                designs that reflect the individual style and personality of our
                clients. Our team of experienced architects and designers is
                dedicated to providing exceptional service and ensuring that
                every project is executed to perfection.
              </Typography>
            </Box>
          </Grid>
          <Grid  md={7} pt={4}>
            <div className="shadow-img">
              <img
                className="homepageimg19"
                src={homepageimg19}
                alt="home page"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Grid>
        <img src={homepageimg} alt="home page" />
      </Grid>

      

        
      
    </>
  );
};

export default Hero;
