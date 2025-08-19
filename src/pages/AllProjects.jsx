import React from "react";
import screenshot1 from "../assets/RactLibrary.png";
import screenshot2 from "../assets/AriCreati.png";
import screenshot3 from "../assets/webdesign.jpg";

export default function AllProjects() {
  const projects = [
    {
      img: screenshot1,
      title: "Library Snapshot",
      subtitle: "Ultraverse",
      stack: "React, JavaScript, Node.js, Git",
      description:
        "The final product of my internship with Frontend Simplified. This internship consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios, Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on GitHub.",
    },
    {
      img: screenshot2,
      title: "Aricreati Business",
      subtitle: "Creative Strategy",
      stack: "React, JavaScript, Tailwind",
      description:
        "A modern business platform designed to highlight creative solutions for small and medium enterprises. Focused on speed, responsive design, and scalability, this project blends a sleek interface with strategic storytelling to showcase the identity and values of Aricreati in a digital-first world.",
    },
    {
      img: screenshot3,
      title: "Treact Clone",
      stack: "HTML, JavaScript, CSS",
      description:
        "This clone is a test of my ability to recreate the landing page of another website. The clone includes the same assets, animations, dynamic components, and responsive design as the original.",
    },
  ];

  return (
    <section className="relative min-h-screen text-white px-6 py-16 flex flex-col items-center
      bg-[linear-gradient(135deg,#e0e0e0_0%,#444444_20%,#111111_50%,#222222_100%)]">

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Top-left intro */}
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

      {/* Stacked windows */}
      <div className="w-full flex flex-col items-center gap-14 relative z-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative w-full max-w-5xl h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={`project-${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-40"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              <div className="relative h-full w-full flex items-center">
                <div className="px-10 md:px-14 max-w-3xl">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold mb-4">
                    {project.subtitle}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 mb-5">
                    {project.stack}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


















