import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [showHi, setShowHi] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Lime cursor dot */}
      <motion.div
        className="fixed rounded-full bg-lime-400 pointer-events-none z-50"
        style={{ x: mouseX, y: mouseY, width: 16, height: 16 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 py-12 text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 z-10 relative w-full max-w-6xl">

          {/* Left Text */}
          <div className="text-center lg:text-right lg:items-end flex flex-col">
            <h1 className="text-sm sm:text-base md:text-lg font-light uppercase tracking-widest -mb-1">
              Fabrizio Terribile
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">FRONTEND</h2>
          </div>

          {/* Image with Hi Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-[24px] object-cover object-[65%_center] w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[400px] lg:w-[340px] lg:h-[460px]"
            />

            {/* "Hi" or 👋 Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-8 -left-8 bg-lime-400 text-black w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg select-none"
              style={{ backgroundColor: "#A3E635" }}
            >
              {showHi ? (
                <motion.span
                  key="hi"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -20, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Hi
                </motion.span>
              ) : (
                <motion.span
                  key="wave"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    👋
                  </motion.span>
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <div className="text-center lg:text-left lg:items-start flex flex-col">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
              DEVELOPER
            </h2>
            <p className="text-sm sm:text-base mt-2 text-neutral-300 max-w-[260px] mx-auto lg:mx-0">
              I'm a US-based front-end developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

















