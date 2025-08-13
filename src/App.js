import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSectionTwo from "./components/HeroSectionTwo";
import HeroSectionThree from "./components/HeroSectionThree";
import HeroSectionFour from "./components/HeroSectionFour";
import HeroSectionFive from "./components/HeroSectionFive";
import Footer from "./components/Footer";

import AllProjects from "./pages/AllProjects"; // make sure file is here
import graphicImg from "./assets/uidesign.jpg";
import webImg from "./assets/webdesign.jpg";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
        <Route path="/all-projects" element={<AllProjects />} />
        {/* fallback to home if unknown path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}
