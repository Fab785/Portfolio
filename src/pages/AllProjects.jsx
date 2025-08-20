import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import screenshot1 from "../assets/RactLibrary.png";
import screenshot2 from "../assets/Aricreati.png";
import screenshot3 from "../assets/Treact.png";
import screenshot4 from "../assets/Skinstric.png";
import screenshot5 from "../assets/Ultraverse.png";

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
        "The final product of my internship with Frontend Simplified. Converted a static website into a dynamic app using Axios, Owl Carousel, and Animate on Scroll. Maintained version control with GitHub PRs.",
      link: "https://library-with-react-rho.vercel.app/#/",
    },
    {
      img: screenshot2,
      title: "Aricreati Business",
      subtitle: "Creative Strategy",
      stack: "React, JavaScript, Tailwind",
      description:
        "A modern business platform highlighting creative solutions for SMEs. Fast, scalable, and responsive — blending sleek UI with strategic storytelling.",
      link: "https://ari-creati.vercel.app/",
    },
    {
      img: screenshot3,
      title: "Treact Clone",
      stack: "React, HTML, CSS",
      description:
        "Recreated the Treact landing page with animations, components, and responsive design — testing precision in front-end replication.",
      link: "https://final-project-zeta-livid.vercel.app/",
    },
    {
      img: screenshot4,
      title: "Skinstric",
      stack: "React, Tailwind, Next.js",
      description:
        "A clean and modern skincare brand website. Built with Next.js for performance, Tailwind for styling, and a mobile-first design approach.",
      link: "https://skinstric-kohl.vercel.app/",
    },
    {
      img: screenshot5,
      title: "Internship Project",
      stack: "React, JavaScript, Tailwind",
      description:
        "Developed during my internship — showcasing UI/UX principles, modern layouts, and responsive components optimized for real-world use cases.",
      link: "https://fabrizio-internship-9q4v.vercel.app/",
    },
  ];

  return (
    <section
      className="relative min-h-screen text-white px-6 py-16 flex flex-col items-center
                 bg-[linear-gradient(135deg,#e0e0e0_0%,#444444_20%,#111111_50%,#222222_100%)]"
    >
      {/* Floating cursor */}
      <div
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ease-out
                    pointer-events-none z-[9999]
                    ${hoveredProject ? "w-16 h-16" : "w-4 h-4"}`}
        style={{
          left: cursorPos.x + 20,
          top: cursorPos.y + 8,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a3e635",
          color: "#000",
        }}
      >
        {hoveredProject && <ArrowUpRight className="w-6 h-6" />}
      </div>

      {/* Overlay */}
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
            {/* Image wrapper */}
            <div className="absolute inset-0">
              <img
                src={project.img}
                alt={`project-${i + 1}`}
                className="w-full h-full object-cover transform scale-105 
                           transition-transform duration-500 group-hover:scale-[1.12] opacity-90"
              />
            </div>

            {/* Overlay + description */}
            <div className="absolute inset-0 flex items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          </a>
        ))}
      </div>
    </section>
  );
}

























