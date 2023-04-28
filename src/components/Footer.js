import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import logo from "../assets/logo/logo-t.png";

import {
  PersonPinCircleOutlined,
  EmailOutlined,
  CallOutlined,
  VideoChatOutlined,
} from "@mui/icons-material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} px={10}>
            
              <div>
                <img className="bottom-logo" src={logo} alt="logo" />
              </div>
            
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className="typography" variant="h4">Contact us</Typography>
            <div className="contact-us">
              <p>
                <PersonPinCircleOutlined className="contact-us-icon" />
                Dot Studio
              </p>
              <p>
                <EmailOutlined className="contact-us-icon" />
                contact@dotstudio.com
              </p>
              <p>
                <CallOutlined className="contact-us-icon" />
                +91-9876543210
              </p>
              <p>
                <VideoChatOutlined className="contact-us-icon" />
                Live: Skype.com
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography variant="h4" className="typography" >Location</Typography>
            <div className="location">
              <p>
                <LocationOnOutlinedIcon className="location-icon" /> xyz, Delhi 
              </p>
            </div>
            <Typography variant="h5" className="typography" >Follow us</Typography>
            <div className="social-icon">
              <p><FacebookIcon /></p>
              <p><LinkedInIcon /></p>
              <p><InstagramIcon /></p>
              <p><YouTubeIcon /></p>
            </div>
          </Grid>
        </Grid>
        <div className="copyright-text">
          <span>Copyright &copy; 2023 Dot Studio</span>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
