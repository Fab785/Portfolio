import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSectionTwo from "./components/HeroSectionTwo";
import HeroSectionThree from "./components/HeroSectionThree";
import HeroSectionFour from "./components/HeroSectionFour";
import HeroSectionFive from "./components/HeroSectionFive";
import Footer from "./components/Footer";

import AllProjects from "./pages/AllProjects.jsx"; // ensure file exists
import graphicImg from "./assets/uidesign.jpg";
import webImg from "./assets/Laptop2.jpg";
import frontendImg from "./assets/laptop.jpg"

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* Home page sections grouped */
function HomePage({ hoveredImage, isMorphing, setHoveredImage, setIsMorphing }) {
  return (
    <>
      <Hero hoveredImage={hoveredImage} isMorphing={isMorphing} />
      <HeroSectionTwo
        setHoveredImage={setHoveredImage}
        setIsMorphing={setIsMorphing}
        frontendImg={frontendImg}
        graphicImg={graphicImg}
        webImg={webImg}
      />
      <HeroSectionThree />
      <HeroSectionFour />
      <HeroSectionFive />
    </>
  );
}

export default function App() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isMorphing, setIsMorphing] = useState(false);

  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              hoveredImage={hoveredImage}
              isMorphing={isMorphing}
              setHoveredImage={setHoveredImage}
              setIsMorphing={setIsMorphing}
            />
          }
        />
        {/* Updated route for Projects page */}
        <Route path="/projects" element={<AllProjects />} />

        {/* fallback to home if unknown path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

