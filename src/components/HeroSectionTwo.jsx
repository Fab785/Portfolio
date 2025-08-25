import React, { useState } from "react"; 
import { CheckCircle } from "lucide-react";
import computerImg from "../assets/computer.jpg";

const HeroSectionTwo = ({ setHoveredImage, setIsMorphing, graphicImg, webImg, frontendImg }) => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isWebDesignOpen, setIsWebDesignOpen] = useState(false);
  const [isUIDesignOpen, setIsUIDesignOpen] = useState(false);
  const [hoveredMainLine, setHoveredMainLine] = useState(null);

  const handleMouseEnterMain = (img, lineKey) => {
    setHoveredImage(img);
    setIsMorphing(true);
    setHoveredMainLine(lineKey);
  };

  const handleMouseLeaveMain = (e) => {
    const toEl = e.relatedTarget;
    if (toEl instanceof Node && e.currentTarget.contains(toEl)) return;

    setHoveredImage(null);
    setIsMorphing(false);
    setHoveredMainLine(null);
  };

  const handleMouseEnterSubmenu = () => {
    setHoveredImage(null);
    setIsMorphing(false);
  };

  const handleMouseLeaveSubmenu = (e) => {
    const parentIsHovered = e.currentTarget.parentElement?.matches(":hover");
    if (parentIsHovered) {
      if (hoveredMainLine === "frontend") {
        setHoveredImage(frontendImg);
        setIsMorphing(true);
      } else if (hoveredMainLine === "ui") {
        setHoveredImage(graphicImg);
        setIsMorphing(true);
      } else if (hoveredMainLine === "web") {
        setHoveredImage(webImg);
        setIsMorphing(true);
      }
    } else {
      setHoveredImage(null);
      setIsMorphing(false);
      setHoveredMainLine(null);
    }
  };

  return (
    <section className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-lime-400">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed max-w-xl">
            As a Front-end Developer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          <ul className="space-y-6 text-lg md:text-xl tracking-wide font-medium">
            {/* FRONT-END DEVELOPMENT */}
            <li
              onClick={() => setIsFrontendOpen((prev) => !prev)}
              onMouseEnter={() => handleMouseEnterMain(frontendImg, "frontend")}
              onMouseLeave={handleMouseLeaveMain}
              className={`cursor-pointer flex flex-col pb-3 group transition-colors duration-300
                ${isFrontendOpen ? "text-lime-400 border-lime-400 border-b" : "border-gray-600 border-b hover:text-lime-400"}
              `}
            >
              <div
                className={`flex justify-between items-center transform transition-all duration-500
                  ${isFrontendOpen ? "-translate-y-2" : "translate-y-0"}
                `}
              >
                <span>1. FRONT-END DEVELOPMENT</span>
                <span
                  className={`transform transition-transform duration-500 ${
                    isFrontendOpen ? "rotate-180 text-lime-400" : ""
                  }`}
                >
                  ↑
                </span>
              </div>

              <ul
                className={`overflow-hidden transition-all duration-500 ${
                  isFrontendOpen ? "max-h-96 mt-4" : "max-h-0 mt-0"
                } space-y-3 text-base text-gray-300 pl-4`}
                onMouseEnter={handleMouseEnterSubmenu}
                onMouseLeave={handleMouseLeaveSubmenu}
              >
                {[
                  "Building responsive, dynamic web apps",
                  "Optimizing performance & accessibility",
                  "Working with React, Next.js & Tailwind",
                  "Integrating APIs & real-world data",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>

            {/* UI/UX DESIGN */}
            <li
              onClick={() => setIsUIDesignOpen((prev) => !prev)}
              onMouseEnter={() => handleMouseEnterMain(graphicImg, "ui")}
              onMouseLeave={handleMouseLeaveMain}
              className={`cursor-pointer flex flex-col pb-3 group transition-colors duration-300
                ${isUIDesignOpen ? "text-lime-400 border-lime-400 border-b" : "border-gray-600 border-b hover:text-lime-400"}
              `}
            >
              <div
                className={`flex justify-between items-center transform transition-all duration-500
                  ${isUIDesignOpen ? "-translate-y-2" : "translate-y-0"}
                `}
              >
                <span>2. UI/UX DESIGN</span>
                <span
                  className={`transform transition-transform duration-500 ${
                    isUIDesignOpen ? "rotate-180 text-lime-400" : ""
                  }`}
                >
                  ↑
                </span>
              </div>

              <ul
                className={`overflow-hidden transition-all duration-500 ${
                  isUIDesignOpen ? "max-h-72 mt-4" : "max-h-0 mt-0"
                } space-y-3 text-base text-gray-300 pl-4`}
                onMouseEnter={handleMouseEnterSubmenu}
                onMouseLeave={handleMouseLeaveSubmenu}
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
            </li>

            {/* WEB DESIGN */}
            <li
              onClick={() => setIsWebDesignOpen((prev) => !prev)}
              onMouseEnter={() => handleMouseEnterMain(webImg, "web")}
              onMouseLeave={handleMouseLeaveMain}
              className={`cursor-pointer flex flex-col pb-3 group transition-colors duration-300
                ${isWebDesignOpen ? "text-lime-400 border-lime-400 border-b" : "border-gray-600 border-b hover:text-lime-400"}
              `}
            >
              <div
                className={`flex justify-between items-center transform transition-all duration-500
                  ${isWebDesignOpen ? "-translate-y-2" : "translate-y-0"}
                `}
              >
                <span>3. WEB DESIGN</span>
                <span
                  className={`transform transition-transform duration-500 ${
                    isWebDesignOpen ? "rotate-180 text-lime-400" : ""
                  }`}
                >
                  ↑
                </span>
              </div>

              <ul
                className={`overflow-hidden transition-all duration-500 ${
                  isWebDesignOpen ? "max-h-80 mt-4" : "max-h-0 mt-0"
                } space-y-3 text-base text-gray-300 pl-4`}
                onMouseEnter={handleMouseEnterSubmenu}
                onMouseLeave={handleMouseLeaveSubmenu}
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
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
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












