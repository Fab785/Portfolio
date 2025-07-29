import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function Hero({ hoveredImage }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [showHi, setShowHi] = useState(true);
  const isFirstHi = useRef(true);

  // Mouse follower
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Toggle Hi and Hand with precise timing
  useEffect(() => {
    const delay = showHi ? 2000 : 4000;
    const timeout = setTimeout(() => {
      setShowHi(!showHi);
      if (showHi) isFirstHi.current = false;
    }, delay);
    return () => clearTimeout(timeout);
  }, [showHi]);

  return (
    <>
      {/* Cursor or Lime Follower */}
      {hoveredImage ? (
        <motion.img
          src={hoveredImage}
          alt="Cursor"
          className="rounded-xl"
          style={{
            position: "fixed",
            top: mouseY,
            left: mouseX,
            width: 120,
            height: 60,
            pointerEvents: "none",
            userSelect: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 10000,
          }}
          draggable={false}
        />
      ) : (
        <motion.div
          className="fixed rounded-full bg-lime-400 pointer-events-none z-50"
          style={{
            x: mouseX,
            y: mouseY,
            width: 16,
            height: 16,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

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

          {/* Image + Hi Bubble */}
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

            {/* Bubble */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-lime-400 shadow-lg flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#A3E635" }}
            >
              <AnimatePresence mode="wait">
                {showHi ? (
                  <motion.div
                    key="hi"
                    className="text-xl sm:text-2xl font-bold text-black absolute"
                    initial={{ y: isFirstHi.current ? "100%" : "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    Hi
                  </motion.div>
                ) : (
                  <motion.div
                    key="hand"
                    className="text-xl sm:text-2xl font-bold text-black absolute"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      👋
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
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





























