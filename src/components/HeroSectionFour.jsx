import React, { useRef, useState, useEffect } from "react";
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
  const scrollContainerRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const scrollDiv = scrollContainerRef.current;

    const onScroll = () => {
      if (!scrollDiv) return;
      const maxScrollTop = scrollDiv.scrollHeight - scrollDiv.clientHeight;
      const scrollTop = scrollDiv.scrollTop;
      const percent = scrollTop / maxScrollTop;
      setScrollPercent(percent);
    };

    if (scrollDiv) {
      scrollDiv.addEventListener("scroll", onScroll);
    }
    return () => {
      if (scrollDiv) {
        scrollDiv.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  function getTranslateY(index) {
    const gap = 20; // px gap during overlap
    const segmentLength = 1 / projects.length;
    const start = segmentLength * index;
    const end = segmentLength * (index + 1);

    if (scrollPercent <= start) return `calc(120% + ${gap}px)`;
    if (scrollPercent >= end) return "0%";

    const localProgress = (scrollPercent - start) / segmentLength;
    const y = 100 - localProgress * 100;
    const gapEffect = (1 - localProgress) * gap; // gap decreases as it reaches final position
    return `calc(${y}% + ${gapEffect}px)`;
  }

  return (
    <div className="w-full h-screen relative relative overflow-hidden">
      {/* Scrollable div to handle scrolling inside this section */}
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* Intro content instead of empty gap */}
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            These selected projects reflect my passion for blending strategy
            with creativity — solving real problems through thoughtful design
            and impactful storytelling.
          </p>
        </div>

        {/* Spacer to allow enough scroll for all images to animate */}
        <div style={{ height: `${projects.length * 100}vh` }} />
      </div>

      {/* Fixed container where images stack and animate */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute left-[10%] w-[80%] h-[80vh] rounded-xl shadow-lg overflow-hidden"
            style={{
              top: 0,
              transform: `translateY(${getTranslateY(index)})`,
              transition: "transform",
              willChange: "transform",
              zIndex: index + 1,
              pointerEvents: "auto",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-gray-200">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





