import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import screenshot1 from "../assets/computer.jpg";
import screenshot2 from "../assets/uidesign.jpg";
import screenshot3 from "../assets/AriCreati.png";

const projects = [
  { id: 1, title: "Project One",  description: "This is a short description for project one.",  image: screenshot1 },
  { id: 2, title: "Project Two",  description: "This is a short description for project two.",  image: screenshot2 },
  { id: 3, title: "Project Three",description: "This is a short description for project three.",image: screenshot3 },
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
        <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          These selected projects reflect my passion for blending strategy with
          creativity — solving real problems through thoughtful design and
          impactful storytelling.
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
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-lg text-gray-200">{project.description}</p>
          </div>
        </div>
      ))}

      {/* Browse All Projects Button */}
      <div className="flex justify-center py-16">
        <Link
          to="/all-projects"
          className="inline-block px-8 py-3 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-full
                     bg-gradient-to-r from-lime-400 to-lime-400 bg-[length:0%_100%] bg-no-repeat bg-left
                     hover:bg-[length:100%_100%] hover:text-black
                     transition-all duration-500 ease-out"
        >
          BROWSE ALL PROJECTS
        </Link>
      </div>
    </section>
  );
}


