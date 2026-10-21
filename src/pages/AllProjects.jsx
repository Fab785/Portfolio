import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt, FaFire } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiNextdotjs, SiAxios } from "react-icons/si";

import screenshot1 from "../assets/RactLibrary.png";
import screenshot2 from "../assets/Aricreati.png";
import screenshot3 from "../assets/Treact.png";
import screenshot4 from "../assets/Skinstric.png"; // Replace with your AI face screenshot asset if available
import screenshot5 from "../assets/Ultraverse.png";
import screenshot6 from "../assets/Xclone.png";
import screenshot7 from "../assets/Summarist.png";

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

  const iconsMap = {
    React: <FaReact className="text-cyan-400" title="React" />,
    JavaScript: <IoLogoJavascript className="text-yellow-400" title="JavaScript" />,
    Nodejs: <FaNodeJs className="text-green-500" title="Node.js" />,
    "Node.js": <FaNodeJs className="text-green-500" title="Node.js" />,
    Git: <FaGitAlt className="text-orange-500" title="Git" />,
    Firebase: <FaFire className="text-amber-500" title="Firebase" />,
    Tailwind: <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />,
    Nextjs: <SiNextdotjs className="text-zinc-200" title="Next.js" />,
    "Next.js": <SiNextdotjs className="text-zinc-200" title="Next.js" />,
    HTML: <IoLogoHtml5 className="text-orange-600" title="HTML5" />,
    CSS: <IoLogoCss3 className="text-blue-500" title="CSS3" />,
    Axios: <SiAxios className="text-purple-400" title="Axios" />,
  };

  const projects = [
    {
      img: screenshot7,
      title: "Summarist Clone",
      badge: "Featured / Internship",
      stack: ["React", "JavaScript", "Firebase", "Tailwind", "Git"],
      description:
        "A full-featured audiobook platform featuring Firebase authentication, payment workflows, dynamic routing, and audio playback. Built as the capstone project for my Frontend Simplified internship.",
      link: "https://summarist-beryl.vercel.app/#/",
      github: "https://github.com/fab785",
    },
    {
      img: screenshot4,
      title: "Skinstric",
      badge: "AI Diagnostic App",
      stack: ["React", "Tailwind", "Next.js", "JavaScript"],
      description:
        "An AI-driven skincare diagnostic web application featuring demographic facial analysis, interactive multi-step quiz flows, and dynamic regimen generation based on skin profiling.",
      link: "https://fab785.github.io/skinstric/",
      github: "https://github.com/fab785/skinstric",
    },
    {
      img: screenshot6,
      title: "X-Clone",
      badge: "Social Media App",
      stack: ["React", "JavaScript", "Tailwind", "Next.js"],
      description:
        "A modern web application replicating Twitter/X core functionality, focusing on responsive feeds, interactive post components, and state management.",
      link: "https://x-clone-plum-theta.vercel.app/",
      github: "https://github.com/fab785",
    },
    {
      img: screenshot1,
      title: "Library Snapshot",
      stack: ["React", "JavaScript", "Node.js", "Axios", "Git"],
      description:
        "Converted a static web template into a dynamic React application using Axios for data fetching, custom filtering, and dynamic cart management.",
      link: "https://library-with-react-rho.vercel.app/#/",
      github: "https://github.com/fab785",
    },
    {
      img: screenshot2,
      title: "Aricreati Business",
      subtitle: "Creative Strategy",
      stack: ["React", "JavaScript", "Tailwind"],
      description:
        "A high-performance business landing page showcasing agency services for SMEs, built with a mobile-first approach and modern CSS transitions.",
      link: "https://fab785.github.io/AriCreati/",
      github: "https://github.com/fab785/AriCreati",
    },
    {
      img: screenshot5,
      title: "ULTRAVERSE",
      subtitle: "NFT Marketplace",
      stack: ["React", "JavaScript", "Tailwind", "Axios"],
      description:
        "An e-commerce style NFT marketplace platform featuring live API data integration, skeleton loading states, and dynamic sorting mechanisms.",
      link: "https://fab785.github.io/fabrizio-internship/",
      github: "https://github.com/fab785/fabrizio-internship",
    },
    {
      img: screenshot3,
      title: "Treact Clone",
      stack: ["React", "HTML", "CSS", "JavaScript"],
      description:
        "A precise, pixel-perfect recreation of the Treact landing UI, focusing on modular component structures and responsive media queries.",
      link: "https://final-project-zeta-livid.vercel.app/",
      github: "https://github.com/fab785",
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Floating cursor */}
      {window.innerWidth >= 768 && (
        <div
          className={`fixed flex items-center justify-center rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out ${
            hoveredProject ? "w-12 h-12 bg-lime-400 text-zinc-950 scale-100" : "w-0 h-0 scale-0"
          }`}
          style={{
            left: cursorPos.x + 16,
            top: cursorPos.y + 16,
            transform: "translate(-50%, -50%)",
          }}
        >
          <ArrowUpRight className="w-5 h-5 font-bold" />
        </div>
      )}

      {/* Page Header */}
      <div className="mb-14 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          All <span className="text-lime-400">Projects</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
          A comprehensive showcase of web applications, client projects, and front-end builds focused on performance, clean UI, and modern React practices.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all shadow-xl flex flex-col justify-between group"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Top Preview Banner */}
            <div className="relative overflow-hidden bg-zinc-950 h-52 border-b border-zinc-800">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {project.badge && (
                <span className="absolute top-3 right-3 text-[10px] font-mono text-lime-400 bg-zinc-950/80 backdrop-blur-md border border-lime-400/30 px-2.5 py-1 rounded-md">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {project.title}
                    {project.subtitle && (
                      <span className="text-xs font-normal text-zinc-500">({project.subtitle})</span>
                    )}
                  </h3>
                </div>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Stack & Links Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xl">
                  {project.stack.map((tech, idx) => (
                    <span key={idx}>{iconsMap[tech] || null}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-950 bg-lime-400 hover:bg-lime-300 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}