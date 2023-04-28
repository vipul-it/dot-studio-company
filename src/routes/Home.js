import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesComponents from "../components/ServicesComponents";
import ProductComponent from "../components/ProductComponent";


const Home = () => {
  useEffect(() => {
    document.title = "Home - Interior Designer";
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      
      <ServicesComponents />
      <ProductComponent />
      <Footer />
    </div>
  );
};

export default Home;
