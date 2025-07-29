import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSectionTwo from "./components/HeroSectionTwo";
import Cursor from "./components/Cursor";

import graphicImg from "./assets/uidesign.jpg"; // immagine per UI Design
import webImg from "./assets/webdesign.jpg";         // immagine per Web Design

function App() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <HeroSectionTwo
        setHoveredImage={setHoveredImage}
        graphicImg={graphicImg}
        webImg={webImg}
      />
      
      <div className="h-[200vh] bg-neutral-900"></div> {/* Ensure scroll space */}
    </div>
  );
}

export default App;


















