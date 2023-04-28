import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import Comingsoonpage from "../components/Comingsoonpage";

const About = () => {
  useEffect(() => {
    document.title = "About - Interior Designer";
  }, []);
  return (
    <div>
      <Navbar />
      <Comingsoonpage/>
      <Footer />
    </div>
  );
};

export default About;
