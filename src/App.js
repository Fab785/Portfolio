import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSectionTwo from "./components/HeroSectionTwo";

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
      <div className="h-[200vh] bg-neutral-900"></div>
    </div>
  );
}

export default App;




















