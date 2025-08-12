import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSectionTwo from "./components/HeroSectionTwo";
import HeroSectionThree from "./components/HeroSectionThree";
import HeroSectionFour from "./components/HeroSectionFour";
import HeroSectionFive from "./components/HeroSectionFive";

import graphicImg from "./assets/uidesign.jpg";
import webImg from "./assets/webdesign.jpg";

function App() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isMorphing, setIsMorphing] = useState(false);

  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      <Navbar />
      <Hero hoveredImage={hoveredImage} isMorphing={isMorphing} />
      <HeroSectionTwo
        setHoveredImage={setHoveredImage}
        setIsMorphing={setIsMorphing}
        graphicImg={graphicImg}
        webImg={webImg}
      />
      <HeroSectionThree />

      {/* Continuous background wrapper for section 4 & 5 */}
      
      
        <HeroSectionFour /> {/* should have bg-transparent */}
        <HeroSectionFive /> {/* should have bg-transparent */}
    </div>
  );
}

export default App;





















