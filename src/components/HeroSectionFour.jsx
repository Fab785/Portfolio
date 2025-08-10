import React, { useEffect, useState, useRef } from "react";
import screenshot1 from "../assets/computer.jpg";
import screenshot2 from "../assets/uidesign.jpg";
import screenshot3 from "../assets/webdesign.jpg";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a short description for project one.",
    image: screenshot1,
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a short description for project two.",
    image: screenshot2,
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a short description for project three.",
    image: screenshot3,
  },
];

export default function HeroSectionFour() {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleScroll() {
      if (!firstImageRef.current || !secondImageRef.current) return;

      const secondImageTop = secondImageRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Shrink starts when second image top enters viewport bottom (i.e. <= windowHeight)
      // Progress is 0 when secondImageTop === windowHeight, 1 when scrolled 300px past that point
      const shrinkRange = 300;
      let progress = (windowHeight - secondImageTop) / shrinkRange;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const minScale = 0.8;
      const newScale = 1 - progress * (1 - minScale);

      setScale(newScale);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen bg-transparent relative overflow-y-auto">
      {/* Intro */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
        </p>
      </div>

      {/* First image */}
      <div
        ref={firstImageRef}
        className="w-[80%] max-w-5xl mx-auto my-10 rounded-xl shadow-lg overflow-hidden h-[80vh] relative"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center top",
          transition: "transform 0.1s linear",
          zIndex: 10,
        }}
      >
        <img
          src={projects[0].image}
          alt={projects[0].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-3xl font-bold text-white mb-2">{projects[0].title}</h2>
          <p className="text-lg text-gray-200">{projects[0].description}</p>
        </div>
      </div>

      {/* Second image */}
      <div
        ref={secondImageRef}
        className="w-[80%] max-w-5xl mx-auto my-10 rounded-xl shadow-lg overflow-hidden h-[80vh] relative"
      >
        <img
          src={projects[1].image}
          alt={projects[1].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-3xl font-bold text-white mb-2">{projects[1].title}</h2>
          <p className="text-lg text-gray-200">{projects[1].description}</p>
        </div>
      </div>

      {/* Third image */}
      <div
        className="w-[80%] max-w-5xl mx-auto my-10 rounded-xl shadow-lg overflow-hidden h-[80vh] relative"
      >
        <img
          src={projects[2].image}
          alt={projects[2].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-3xl font-bold text-white mb-2">{projects[2].title}</h2>
          <p className="text-lg text-gray-200">{projects[2].description}</p>
        </div>
      </div>
    </section>
  );
}

