
import React from 'react'
import Box from "@mui/material/Box";
import {Container, Grid, Paper, Typography } from "@mui/material";

const ServicesComponents = () => {
  return (
    <div>
        {/* Services page start */}
      <Container >
        <Grid   pt={15}>
          <Typography variant="h6" pl={11.5}>
            Our
          </Typography>
          <Typography variant="h3" pl={11.5} pb={6}>
            Services
          </Typography>
        </Grid>
        <Grid container spacing={4} px={11.5}>
          <Grid item md={3} pt={4}>
            <Paper elevation={6}>
              <Box pb={4} className="zoom-in-effect">
                <Grid p={4}>
                  <Typography variant="h6">01.</Typography>
                  <Typography variant="h4">Architecture designing</Typography>
                  <Typography variant="body1">
                    Architecture design also includes the selection of...
                  </Typography>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} pt={4}>
            <Paper elevation={6}>
              <Box pb={4} className="zoom-in-effect">
                <Grid p={4}>
                  <Typography variant="h6">02.</Typography>
                  <Typography variant="h4">Interior Designing</Typography>
                  <Typography variant="body1">
                    Interior design is the art and science of creating...
                  </Typography>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} pt={4}>
            <Paper elevation={6}>
              <Box pb={4} className="zoom-in-effect">
                <Grid p={4}>
                  <Typography variant="h6">03.</Typography>
                  <Typography variant="h4">Landscape Designing</Typography>
                  <Typography variant="body1" pb={3}>
                    Landscape designing is the art and science of...
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
                  <Typography variant="body1">
                    Engineering services refer to a broad range of...
                  </Typography>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default ServicesComponents