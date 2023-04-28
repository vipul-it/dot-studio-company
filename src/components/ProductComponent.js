import React from 'react'
import Box from "@mui/material/Box";
import homepageimg02 from "../assets/images/Homepage/02.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button, Grid, Typography } from "@mui/material";

const ProductComponent = () => {
  return (
    <div>
        {/* Product Page start  */}
        <Grid pt={15}>
          <Grid container mb={10}>
            <Grid item md={5}>
              <Box >
                <Typography variant="h6" pl={11.5}>
                  Most Recent
                </Typography>
                <Typography variant="h3" pl={11.5} pb={6}>
                  Projects
                </Typography>
                <Typography variant={"body1"} pl={11.5} pt={1}>
                  We would like to share with you a selection of projects that
                  have not only elicited a great deal of joy and satisfaction to
                  our esteemed clients but have also filled us with immense
                  pride and a sense of accomplishment.
                  <Typography pt={6}>
                    <Button
                      variant="outlined"
                      href="/projects"
                      endIcon={<KeyboardDoubleArrowRightIcon />}
                    >
                      See All Projects
                    </Button>
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7} pt={4}>
              <Box p={6} pb={4}>
                <img
                  className="homepageimg19"
                  src={homepageimg02}
                  alt="home page"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default ProductComponent