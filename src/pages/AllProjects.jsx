import React from "react";

// Import your local images
import screenshot1 from "../assets/computer.jpg";
import screenshot2 from "../assets/uidesign.jpg";
import screenshot3 from "../assets/webdesign.jpg";

export default function AllProjects() {
  const projects = [
    {
      img: screenshot1, // use local image
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
      img: screenshot2, // local image
      title: "Comprehensive Real Estate Solutions",
      description:
        "Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.",
      stats: [{ label: "Luxury Residences", value: "01" }],
    },
    {
      img: screenshot3, // local image
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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-lime-400 mb-10">All Projects</h1>

      {/* Floating cards container */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-3xl shadow-lg overflow-hidden flex-1 max-w-sm"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>

              {/* Stats */}
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

              {/* Optional button */}
              {project.button && (
                <button className="mt-4 px-4 py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition">
                  {project.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


