import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import screenshot1 from "../assets/Ultraverse.png";
import screenshot2 from "../assets/Treact.png";
import screenshot3 from "../assets/Aricreati.png";

const projects = [
  { 
    id: 1, 
    title: "ULTRAVERSE", 
    description: "Exploring immersive metaverse experiences and virtual worlds.", 
    image: screenshot1, 
    link: "https://fabrizio-internship-9q4v.vercel.app/" 
  },
  { 
    id: 2, 
    title: "TRIACT", 
    description: "Innovative AI-powered platform for smart analytics and workflow automation.", 
    image: screenshot2, 
    link: "https://final-project-zeta-livid.vercel.app/" 
  },
  { 
    id: 3, 
    title: "ARICREATI CREAZIONI",
    description: "Creative portfolio and design showcase, highlighting unique projects.",
    image: screenshot3, 
    link: "https://ari-creati.vercel.app/" 
  },
];

export default function HeroSectionFour() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  imageRefs.current = [];

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
  };

  const [scales, setScales] = useState(projects.map(() => 0.85));

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      const newScales = imageRefs.current.map((img) => {
        if (!img) return 0.85;
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - imgCenter);
        const maxDistance = viewportHeight / 1.5;

        let scale =
          0.85 +
          (0.3 *
            (Math.cos(
              (Math.min(distance, maxDistance) / maxDistance) * Math.PI
            ) +
              1)) /
            2;

        return Math.min(Math.max(scale, 0.85), 1.15);
      });

      setScales(newScales);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-transparent">
      <div className="w-[80%] max-w-5xl mx-auto text-left px-2 pb-16">
        <h2 className="text-5xl sm:text-6xl font-bold text-lime-400 mb-4 px-4 py-2 rounded-full inline-block bg-black/30">
          FEATURED PROJECTS
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mt-4">
          Selected projects reflecting creativity and strategy — solving real problems through thoughtful design.
        </p>
      </div>

      {projects.map((project, idx) => (
        <div
          key={project.id}
          ref={addToRefs}
          className="w-[80%] max-w-5xl mx-auto my-10 rounded-xl shadow-lg overflow-hidden h-[80vh] relative transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${scales[idx]})`,
            transformOrigin: "center center",
            zIndex: Math.round(scales[idx] * 100),
            boxShadow:
              scales[idx] > 1.05
                ? "0 25px 50px rgba(0,0,0,0.6)"
                : "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            draggable={false}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-4 sm:px-6 py-6 sm:py-10 text-center">
            <div className="flex-1 flex flex-col justify-start items-center gap-4 sm:gap-6 pt-4 sm:pt-6">
              <h2 className="text-3xl sm:text-6xl font-bold text-lime-400 mb-2 px-2 sm:px-6 py-2 rounded-full bg-black/30 break-words">
                {project.title}
              </h2>
              <p className="text-base sm:text-xl text-gray-200 max-w-full sm:max-w-2xl">
                {project.description}
              </p>
            </div>
            <Link
              to={project.link}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition-colors duration-300"
            >
              Browse This Project
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}






