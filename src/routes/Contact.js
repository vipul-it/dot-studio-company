import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comingsoonpage from '../components/Comingsoonpage';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Interior Designer";
  }, []);
  return (
    <div>
        <Navbar />
        <Comingsoonpage />
        <Footer />
    </div>
  )
}

export default Contact