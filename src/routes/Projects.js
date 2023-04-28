import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comingsoonpage from '../components/Comingsoonpage';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - Interior Designer";
  }, []);
  return (
    <div>
        <Navbar />
        <Comingsoonpage />
        <Footer />
    </div>
  )
}

export default Projects