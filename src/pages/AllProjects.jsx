import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiNextdotjs, SiAxios } from "react-icons/si";
import screenshot1 from "../assets/RactLibrary.png";
import screenshot2 from "../assets/Aricreati.png";
import screenshot3 from "../assets/Treact.png";
import screenshot4 from "../assets/Skinstric.png";
import screenshot5 from "../assets/Ultraverse.png";

export default function AllProjects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const rafId = useRef(null);

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

  // map stack names to icons
  const iconsMap = {
    React: <FaReact className="text-cyan-400 text-3xl" />,
    JavaScript: <IoLogoJavascript className="text-yellow-400 text-3xl" />,
    Nodejs: <FaNodeJs className="text-green-500 text-3xl" />,
    "Node.js": <FaNodeJs className="text-green-500 text-3xl" />,
    Git: <FaGitAlt className="text-orange-500 text-3xl" />,
    Tailwind: <SiTailwindcss className="text-sky-400 text-3xl" />,
    Nextjs: <SiNextdotjs className="text-gray-200 text-3xl" />,
    "Next.js": <SiNextdotjs className="text-gray-200 text-3xl" />,
    HTML: <IoLogoHtml5 className="text-orange-600 text-3xl" />,
    CSS: <IoLogoCss3 className="text-blue-500 text-3xl" />,
    Axios: <SiAxios className="text-purple-400 text-3xl" />,
  };

  const projects = [
    {
      img: screenshot1,
      title: "Library Snapshot",
      stack: ["React", "JavaScript", "Node.js", "Git"],
      description:
        "The final product of my internship with Frontend Simplified. Converted a static website into a dynamic app using Axios, Owl Carousel, and Animate on Scroll. Maintained version control with GitHub PRs.",
      link: "https://library-with-react-rho.vercel.app/#/",
    },
    {
      img: screenshot2,
      title: "Aricreati Business",
      subtitle: "Creative Strategy",
      stack: ["React", "JavaScript", "Tailwind"],
      description:
        "A modern business platform highlighting creative solutions for SMEs. Fast, scalable, and responsive — blending sleek UI with strategic storytelling.",
      link: "https://fab785.github.io/AriCreati/",
    },
    {
      img: screenshot3,
      title: "Treact Clone",
      stack: ["React", "HTML", "CSS"],
      description:
        "Recreated the Treact landing page with animations, components, and responsive design — testing precision in front-end replication.",
      link: "https://final-project-zeta-livid.vercel.app/",
    },
    {
      img: screenshot4,
      title: "Skinstric",
      stack: ["React", "Tailwind", "Next.js"],
      description:
        "A clean and modern skincare brand website. Built with Next.js for performance, Tailwind for styling, and a mobile-first design approach.",
      link: "https://fab785.github.io/skinstric/",
    },
    {
      img: screenshot5,
      title: "ULTRAVERSE",
      subtitle: "Internship Project",
      stack: ["React", "JavaScript", "Tailwind"],
      description:
        "Developed during my internship — showcasing UI/UX principles, modern layouts, and responsive components optimized for real-world use cases.",
      link: "https://fab785.github.io/fabrizio-internship/",
    },
  ];

  return (
    <section
      className="relative min-h-screen text-white px-6 py-16 flex flex-col items-center"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(132,204,22,0.15), transparent 60%),
          radial-gradient(circle at bottom right, rgba(132,204,22,0.15), transparent 70%),
          linear-gradient(to bottom right, #000000, #111827, #1a2e05)
        `,
      }}
    >
      {/* Floating cursor */}
      <div
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ease-out
                    pointer-events-none z-[9999]
                    ${hoveredProject ? "w-16 h-16" : "w-4 h-4"}`}
        style={{
          left: cursorPos.x + 28,
          top: cursorPos.y + 20,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a3e635",
          color: "#000",
        }}
      >
        {hoveredProject && <ArrowUpRight className="w-6 h-6" />}
      </div>

      {/* Header */}
      <div className="w-full max-w-7xl mt-32 mb-12 text-left relative z-10">
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
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img
                src={project.img}
                alt={`project-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sliding door overlays for desktop */}
            <div className="absolute inset-0 hidden md:flex pointer-events-none">
              {/* Left panel */}
              <div
                className="w-1/2 h-full bg-black/40 backdrop-blur-md transform -translate-x-full 
                           group-hover:translate-x-0 transition-transform duration-500 ease-in-out
                           flex flex-col justify-start items-start px-8 pt-16"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
                    {project.subtitle}
                  </h4>
                )}
                {project.stack && (
                  <div className="flex space-x-4 mt-4">
                    {project.stack.map((tech, index) => (
                      <span key={index}>{iconsMap[tech] || tech}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right panel */}
              <div
                className="w-1/2 h-full bg-black/40 backdrop-blur-md transform translate-x-full 
                           group-hover:translate-x-0 transition-transform duration-500 ease-in-out
                           flex flex-col justify-end items-start px-8 pb-16"
              >
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 mt-20">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Simple overlay for mobile (appears only on hover/tap) */}
<div className="absolute inset-0 flex md:hidden bg-black/60 backdrop-blur-md flex-col justify-center items-center p-6 text-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <h3 className="text-2xl font-bold text-lime-400 mb-2">{project.title}</h3>
  {project.subtitle && (
    <h4 className="text-lg font-semibold text-gray-200 mb-4">
      {project.subtitle}
    </h4>
  )}
  <p className="text-base text-gray-100 mb-4">{project.description}</p>
  {project.stack && (
    <div className="flex space-x-3 justify-center">
      {project.stack.map((tech, index) => (
        <span key={index}>{iconsMap[tech] || tech}</span>
      ))}
    </div>
  )}
</div>

          </a>
        ))}
      </div>
    </section>
  );
}



































