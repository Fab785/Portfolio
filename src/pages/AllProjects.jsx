import React, { useState, useRef, useEffect } from "react";
import screenshot1 from "../assets/computer.jpg";
import screenshot2 from "../assets/uidesign.jpg";
import screenshot3 from "../assets/webdesign.jpg";

export default function AllProjects() {
  const projects = [
    {
      img: screenshot1,
      title: "Find Your Perfect Home Today",
      description:
        "We provide tailored real estate solutions, guiding you through every step with personalized experiences that meet your unique needs and aspirations.",
      stats: [
        { label: "Projects Complete", value: "200+" },
        { label: "Happy Clients", value: "70+" },
        { label: "Project Value", value: "$10M+" },
      ],
      button: "Explore Properties",
    },
    {
      img: screenshot2,
      title: "Comprehensive Real Estate Solutions",
      description:
        "Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.",
      stats: [{ label: "Luxury Residences", value: "01" }],
    },
    {
      img: screenshot3,
      title: "Redefining Excellence in Real Estate",
      description:
        "We specialize in luxury properties, sustainable homes, and vacation rentals — driven by a passion for exceptional living and a commitment to quality, innovation, and client satisfaction.",
      stats: [
        { label: "Projects Complete", value: "200+" },
        { label: "Happy Clients", value: "70+" },
        { label: "Project Value", value: "$10M+" },
        { label: "Client Retention Rate", value: "90%" },
      ],
    },
  ];

  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  imageRefs.current = [];

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const [scales, setScales] = useState(projects.map(() => 0.85));
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Top-left intro */}
      <div className="w-full max-w-7xl mb-12 text-left">
        <h1 className="text-4xl font-bold text-lime-400 mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-300 max-w-2xl">
          These selected projects reflect my passion for blending strategy with
          creativity — solving real problems through thoughtful design and
          impactful storytelling.
        </p>
      </div>

      {/* Floating cards */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl justify-center">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={addToRefs}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="bg-white text-black rounded-3xl shadow-lg overflow-hidden flex-1 max-w-sm cursor-pointer transition-transform duration-500 ease-out"
            style={{
              transform: `scale(${
                hoveredIndex === idx ? scales[idx] * 1.1 : scales[idx]
              })`,
              transformOrigin: "center center",
              zIndex: hoveredIndex === idx ? 200 : Math.round(scales[idx] * 100),
              marginTop: "5rem",
              boxShadow:
                hoveredIndex === idx
                  ? "0 35px 60px rgba(0,0,0,0.7)"
                  : scales[idx] > 1.05
                  ? "0 25px 50px rgba(0,0,0,0.6)"
                  : "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>

              {project.stats && (
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-900">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <span className="block text-lg">{stat.value}</span>
                      <span className="text-gray-500">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {project.button && (
                <button className="mt-4 px-4 py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition">
                  {project.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



