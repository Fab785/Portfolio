import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import CountUp from "react-countup"; // 👈 import CountUp
import profileImg from "../assets/Fab.jpg";

const HeroSectionThree = () => {
  return (
    <section className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20">
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
          <div className="flex gap-12 mb-10 max-w-xs">
            <div className="flex flex-col items-center">
              <span className="text-lime-400 text-4xl font-extrabold">
                <CountUp end={6} duration={2} />
              </span>
              <span className="text-gray-400 uppercase tracking-wide text-sm mt-1 text-center">
                Months of Experience
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lime-400 text-4xl font-extrabold">
                <CountUp end={100} duration={2} suffix="+" />
              </span>
              <span className="text-gray-400 uppercase tracking-wide text-sm mt-1 text-center">
                Hours of Studies
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lime-400 text-4xl font-extrabold">
                <CountUp end={16} duration={2} />
              </span>
              <span className="text-gray-400 uppercase tracking-wide text-sm mt-1 text-center">
                Completed Projects
              </span>
            </div>
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
          </div>

          {/* Email with envelope icon */}
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-lime-400" />
            <a
              href="mailto:fabrizioterribile@gmail.com"
              className="text-white underline text-lg"
            >
              fabrizioterribile@gmail.com
            </a>
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


