import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/Fab.jpg";

export default function AboutMe() {
  return (
    <section className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-black">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT SIDE: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-lime-400 mb-6 uppercase tracking-wide">
            MY STORY
          </h2>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            Hi, I'm Fabrizio, a passionate Front-end developer. I started my journey at Frontend Simplified school in February, and since then, I’ve been dedicated to mastering modern web development technologies.
          </p>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            I enjoy creating interactive and visually appealing digital experiences, blending design and functionality to bring ideas to life. Every project I build is a step forward in refining my skills and pushing the boundaries of what’s possible on the web.
          </p>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            My focus is on building responsive, dynamic, and user-friendly web applications using React, Tailwind CSS, and modern development tools. Learning and experimenting with new technologies keeps me inspired every day.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-full
                       bg-gradient-to-r from-lime-400 to-lime-400 bg-[length:0%_100%] bg-no-repeat bg-left
                       hover:bg-[length:100%_100%] hover:text-black
                       transition-all duration-500 ease-out"
          >
            Back to Home
          </Link>
        </div>

        {/* RIGHT SIDE: Image */}
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
}
