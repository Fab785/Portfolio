import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/Fab.jpg";

export default function AboutMe() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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

  return (
    <section
      className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20 relative"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(132,204,22,0.15), transparent 60%),
          radial-gradient(circle at bottom right, rgba(132,204,22,0.15), transparent 70%),
          linear-gradient(to bottom right, #000000, #111827, #1a2e05)
        `,
      }}
    >
      {/* Lime dot cursor */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] bg-lime-400"
        style={{
            left: cursorPos.x + 28, // moves the dot 20px to the right
            top: cursorPos.y + 20,   // moves the dot 8px down
            transform: "translate(-50%, -50%)",
            transition: "all 0.05s ease-out",
          }}
          
      />

      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT SIDE: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-lime-400 mb-6 uppercase tracking-wide">
            ABOUT ME
          </h2>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            Hi, I'm Fabrizio — a passionate Frontend Developer. I began my journey at
            Frontend Simplified in February and have been fully committed to mastering
            modern web technologies ever since.
          </p>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            I love building interactive and visually engaging digital experiences,
            blending design and functionality to turn ideas into reality. Every project I
            create is an opportunity to sharpen my skills and explore new ways to push the
            boundaries of web development.
          </p>
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
            My focus is on crafting responsive, dynamic, and user-friendly applications
            with React, Tailwind CSS, and other modern tools. I’m constantly learning,
            experimenting, and staying inspired by the evolving world of technology.
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
<div className="w-full sm:w-[300px] md:w-[400px] aspect-[3/4] flex-shrink-0">
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


