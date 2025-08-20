import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import screenshot1 from "../assets/RactLibrary.png";
import screenshot2 from "../assets/Aricreati.png";
import screenshot3 from "../assets/Treact.png";

export default function AllProjects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const rafId = useRef(null);

  // Smooth mouse tracking (throttled via rAF)
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => setCursorPos({ x, y }));
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const projects = [
    {
      img: screenshot1,
      title: "Library Snapshot",
      subtitle: "Ultraverse",
      stack: "React, JavaScript, Node.js, Git",
      description:
        "The final product of my internship with Frontend Simplified. This internship consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios, Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on GitHub.",
      link: "https://library-with-react-rho.vercel.app/#/",
    },
    {
      img: screenshot2,
      title: "Aricreati Business",
      subtitle: "Creative Strategy",
      stack: "React, JavaScript, Tailwind",
      description:
        "A modern business platform designed to highlight creative solutions for small and medium enterprises. Focused on speed, responsive design, and scalability, this project blends a sleek interface with strategic storytelling to showcase the identity and values of Aricreati in a digital-first world.",
      link: "https://ari-creati.vercel.app/",
    },
    {
      img: screenshot3,
      title: "Treact Clone",
      stack: "HTML, CSS",
      description:
        "This clone is a test of my ability to recreate the landing page of another website. The clone includes the same assets, animations, dynamic components, and responsive design as the original.",
      link: "https://final-project-zeta-livid.vercel.app/",
    },
  ];

  return (
    <section
      className="relative min-h-screen text-white px-6 py-16 flex flex-col items-center
                 bg-[linear-gradient(135deg,#e0e0e0_0%,#444444_20%,#111111_50%,#222222_100%)]"
    >
      {/* Visual-only floating cursor (no pointer events = no flicker) */}
      <div
        className={`fixed flex items-center justify-center rounded-full z-50 transition-all duration-200 ease-out
                    mix-blend-difference pointer-events-none
                    ${hoveredProject ? "w-16 h-16" : "w-4 h-4"}`}
        style={{
          left: cursorPos.x + 20, // sit a bit to the right of the real cursor
          top: cursorPos.y + 8,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a3e635", // lime-400
          color: "#000",
        }}
      >
        {hoveredProject && <ArrowUpRight className="w-6 h-6" />}
      </div>

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Header */}
      <div className="w-full max-w-7xl mb-12 text-left relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-lime-400 mb-6">
          Featured Projects
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl">
          These selected projects reflect my passion for blending strategy with
          creativity — solving real problems through thoughtful design and
          impactful storytelling.
        </p>
      </div>

      {/* Project cards */}
      <div className="w-full flex flex-col items-center gap-14 relative z-10">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="relative w-full max-w-5xl h-[600px] rounded-3xl overflow-hidden shadow-2xl group block"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            aria-label={`${project.title} – open project`}
          >
            {/* Image */}
            <img
              src={project.img}
              alt={`project-${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-40"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="relative h-full w-full flex items-center">
                <div className="px-10 md:px-14 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <h4 className="text-xl md:text-2xl font-semibold mb-4">
                      {project.subtitle}
                    </h4>
                  )}
                  {project.stack && (
                    <p className="text-sm md:text-base text-gray-300 mb-5">
                      {project.stack}
                    </p>
                  )}
                  <p className="text-base md:text-lg leading-relaxed text-gray-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
























