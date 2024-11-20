import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Changed Routes to Router
import Home from "./pages/Home.jsx"
import Navbar from './components/Navbar'; 
import Footer from './components/Footer.jsx';
import Brochure from './pages/Brochure.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Reviews from './pages/Reviews.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Result from './pages/Result.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Brochure" element={<Brochure />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/results" element={<Result />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;