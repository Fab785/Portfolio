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
      <div
        style={{
          background: "linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #1a1a1a 100%)"
        }}
      >
        <HeroSectionFour /> {/* should have bg-transparent */}
        <HeroSectionFive /> {/* should have bg-transparent */}
      </div>

      <div className="h-[200vh] bg-neutral-900"></div>
    </div>
  );
}

export default App;





















