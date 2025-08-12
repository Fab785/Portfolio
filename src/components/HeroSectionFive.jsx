import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function HeroSectionFive() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [showHi, setShowHi] = useState(true);
  const isFirstHi = useRef(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const delay = showHi ? 2000 : 4000;
    const timeout = setTimeout(() => {
      setShowHi(!showHi);
      if (showHi) isFirstHi.current = false;
    }, delay);
    return () => clearTimeout(timeout);
  }, [showHi]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white overflow-hidden bg-transparent"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 max-w-7xl w-full">
        {/* Left Side: Image + Hi bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-[24px] object-cover object-center w-[280px] h-[380px] lg:w-[340px] lg:h-[460px]"
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-lime-400 shadow-lg flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#A3E635" }}
          >
            <AnimatePresence initial={false}>
              {showHi ? (
                <motion.div
                  key="hi"
                  className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black"
                  initial={{ y: isFirstHi.current ? "100%" : "-100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Hi
                </motion.div>
              ) : (
                <motion.div
                  key="wave"
                  className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    style={{ display: "inline-block" }}
                  >
                    👋
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right Side: Form */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-neutral-300 mb-8">
            Let’s build something impactful together—whether it’s your brand,
            your website, or your next big idea.
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lime-400 text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Fabrizio Terribile"
                className="w-full bg-neutral-800 rounded-full px-4 py-2 outline-none text-white border border-transparent focus:border-lime-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-lime-400 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="fabrizioterribile@gmail.com"
                className="w-full bg-neutral-800 rounded-full px-4 py-2 outline-none text-white border border-transparent focus:border-lime-400 transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lime-400 text-sm mb-1">
              Service Needed ?
            </label>
            <select className="w-full bg-neutral-800 rounded-full px-4 py-2 outline-none text-white border border-transparent focus:border-lime-400 transition-colors">
              <option>Select...</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-lime-400 text-sm mb-1">
              What Can I Help You...
            </label>
            <textarea
              placeholder="Hello, I'd like to..."
              className="w-full bg-neutral-800 rounded-xl px-4 py-3 outline-none text-white h-32 border border-transparent focus:border-lime-400 transition-colors"
            />
          </div>

          <button
  className="relative overflow-hidden border border-lime-400 text-lime-400 px-8 py-2 rounded-full font-bold transition-colors"
  style={{
    background:
      "linear-gradient(to right, #A3E635 0%, #A3E635 50%, transparent 50%, transparent 100%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "background-position 0.6s ease",
  }}
  onMouseEnter={e => {
    e.currentTarget.style.backgroundPosition = "left bottom";
    e.currentTarget.style.color = "black";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundPosition = "right bottom";
    e.currentTarget.style.color = "#A3E635";
  }}
>
  SUBMIT
</button>

        </div>
      </div>
    </section>
  );
}



