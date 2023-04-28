import React, { useEffect } from 'react'
import './Services.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Grid, Paper, Typography } from '@mui/material';
import servicesimg03 from '../assets/images/Homepage/03.jpg';

const Services = () => {
  useEffect(() => {
    document.title = "Services - Interior Designer";
  }, []);
  return (
    <div>
        <Navbar />
        {/* Services page start */}
      <Grid pt={11} align="center">
        <Typography variant="h3"  pb={4}>
          Our Services
        </Typography>
      </Grid>
      <Grid>
        <img className='services-img' src={servicesimg03} alt='service' />
      </Grid>
      <Grid container spacing={4} px={11.5} py={12} >
        <Grid item md={3} pt={4} >
          <Paper elevation={6}>
            <Box pb={4} className="zoom-in-effect">
              <Grid p={4}>
                <Typography variant="h6">01.</Typography>
                <Typography variant="h4">Architecture designing</Typography>
                <Typography variant="body1" pb={4}>
                Architecture design includes the selection of various components and elements that will form the building blocks of the overall structure.
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={3} pt={4} >
          <Paper elevation={6}>
            <Box pb={4} className="zoom-in-effect">
              <Grid p={4}>
                <Typography variant="h6">02.</Typography>
                <Typography variant="h4">Interior Designing</Typography>
                <Typography variant="body1" pb={7}>
                Interior design is the art and science of creating functional and aesthetically pleasing spaces within a building.
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={3} pt={4} >
          <Paper elevation={6}>
            <Box pb={4} className="zoom-in-effect">
              <Grid p={4}>
                <Typography variant="h6">03.</Typography>
                <Typography variant="h4">Landscape Designing</Typography>
                <Typography variant="body1" pb={1}>
                Landscape designing is the art and science of creating outdoor environments that are functional, aesthetically pleasing, and sustainable.
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={3} pt={4}>
          <Paper elevation={6}>
            <Box pb={4} className="zoom-in-effect">
              <Grid p={4}>
                <Typography variant="h6">04.</Typography>
                <Typography variant="h4">Engineering services</Typography>
                <Typography variant="body1" pb={4}>
                Engineering services refer to a broad range of professional services that are provided by engineers and engineering firms.
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* Services page end */}
        <Footer />
    </div>
  )
}

export default Services