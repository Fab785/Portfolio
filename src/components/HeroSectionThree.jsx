import React from "react";
import { Linkedin, Github } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; 
import profileImg from "../assets/Fab.jpg";
import { Link } from "react-router-dom";

const HeroSectionThree = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            ABOUT ME
          </h2>
          <p className="text-gray-300 mb-10 max-w-lg leading-relaxed">
            Hi, I'm Fabrizio — a Front-end developer passionate about crafting meaningful and impactful digital experiences.
          </p>

          {/* Stats row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-10 max-w-xs md:max-w-full">
            {[
              { end: 7, label: "Months of Experience" },
              { end: 100, label: "Hours of Studies", suffix: "+" },
              { end: 6, label: "Completed Projects" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-lime-400 text-4xl font-extrabold">
                  {inView ? <CountUp end={stat.end} duration={2} suffix={stat.suffix || ""} /> : 0}
                </span>
                <span className="text-gray-400 uppercase tracking-wide text-sm mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/fabrizio-terribile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/Fab785"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <Github size={32} />
            </a>

            {/* PDF Resume Link */}
            <a
              href="https://fab785.github.io/iResume/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="hover:text-lime-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" width="32" height="32">
                <rect x="8" y="4" width="48" height="56" rx="4" ry="4" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.1" />
                <polygon points="48,4 48,20 64,20" fill="currentColor" fillOpacity="0.2" />
                <text x="32" y="44" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">
                  PDF
                </text>
              </svg>
            </a>
          </div>

          {/* My Story Button */}
          <div className="flex justify-start">
            <Link
              to="/my-story"
              className="inline-block px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-full
                         bg-gradient-to-r from-lime-400 to-lime-400 bg-[length:0%_100%] bg-no-repeat bg-left
                         hover:bg-[length:100%_100%] hover:text-black
                         transition-all duration-500 ease-out"
            >
              My Story
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[300px] md:w-[400px] aspect-[3/4]">
          <div
            className="w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_40px_rgba(0,0,0,0.6)]"
            style={{
              transform: "rotateZ(-3deg) rotateX(2deg)",
              transformOrigin: "bottom right",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover object-[65%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionThree;




