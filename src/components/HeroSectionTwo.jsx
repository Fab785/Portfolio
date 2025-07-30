import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import computerImg from "../assets/computer.jpg";

const HeroSectionTwo = ({ setHoveredImage, setIsMorphing, graphicImg, webImg }) => {
  const [isWebDesignOpen, setIsWebDesignOpen] = useState(false);
  const [isUIDesignOpen, setIsUIDesignOpen] = useState(false);
  const [hoveredMainLine, setHoveredMainLine] = useState(null);

  const handleMouseEnterMain = (img, lineKey) => {
    setHoveredImage(img);
    setIsMorphing(true);
    setHoveredMainLine(lineKey);
  };

  const handleMouseLeaveMain = () => {
    // Delay to confirm whether submenu was hovered
    setTimeout(() => {
      if (!document.querySelector(":hover").closest("ul")) {
        setHoveredImage(null);
        setIsMorphing(false);
        setHoveredMainLine(null);
      }
    }, 50);
  };

  const handleMouseEnterSubmenu = () => {
    setHoveredImage(null);
    setIsMorphing(false);
  };

  const handleMouseLeaveSubmenu = () => {
    if (hoveredMainLine === "ui") {
      setHoveredImage(graphicImg);
      setIsMorphing(true);
    } else if (hoveredMainLine === "web") {
      setHoveredImage(webImg);
      setIsMorphing(true);
    } else {
      setHoveredImage(null);
      setIsMorphing(false);
    }
  };

  return (
    <section className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed max-w-xl">
            As a Front-end Developer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          <ul className="space-y-6 text-lg md:text-xl tracking-wide font-medium">
            {/* UI DESIGN */}
            <li
              onClick={() => setIsUIDesignOpen((prev) => !prev)}
              onMouseEnter={() => handleMouseEnterMain(graphicImg, "ui")}
              onMouseLeave={handleMouseLeaveMain}
              className="cursor-pointer flex flex-col border-b border-gray-600 pb-3 group hover:text-lime-400 transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <span>1. UI DESIGN</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isUIDesignOpen ? "rotate-180 text-lime-400" : ""
                  }`}
                >
                  ↑
                </span>
              </div>

              {isUIDesignOpen && (
                <ul
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                  className="mt-4 space-y-3 text-base text-gray-300 pl-4"
                >
                  {[
                    "User Interface design for web and mobile apps",
                    "Usability testing and user feedback analysis",
                    "Interaction design and micro-animations",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-lime-400 w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* WEB DESIGN */}
            <li
              onClick={() => setIsWebDesignOpen((prev) => !prev)}
              onMouseEnter={() => handleMouseEnterMain(webImg, "web")}
              onMouseLeave={handleMouseLeaveMain}
              className="cursor-pointer flex flex-col border-b border-gray-600 pb-3 group hover:text-lime-400 transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <span>2. WEB DESIGN</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isWebDesignOpen ? "rotate-180 text-lime-400" : ""
                  }`}
                >
                  ↑
                </span>
              </div>

              {isWebDesignOpen && (
                <ul
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                  className="mt-4 space-y-3 text-base text-gray-300 pl-4"
                >
                  {[
                    "Responsive website design",
                    "Landing page design and optimization",
                    "Webflow development and customization",
                    "Website maintenance and updates",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-lime-400 w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl transform rotate-6 shadow-xl overflow-hidden">
            <img
              src={computerImg}
              alt="computer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;






