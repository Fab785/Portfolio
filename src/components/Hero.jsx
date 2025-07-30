import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function Hero({ hoveredImage, isMorphing }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [showHi, setShowHi] = useState(true);
  const isFirstHi = useRef(true);

  // Track previous isMorphing state to adjust transition speed
  const prevMorphing = useRef(false);

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

  // Determine transition duration based on morph direction
  const transitionDuration = isMorphing && !prevMorphing.current ? 0.6 : 0.15;
  // Update prevMorphing for next render
  prevMorphing.current = isMorphing;

  return (
    <>
      {/* Morphing Dot / Image */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "0%",
          translateY: "-50%",
          backgroundColor:
            isMorphing && hoveredImage ? "transparent" : "#A3E635",
          backgroundImage:
            isMorphing && hoveredImage ? `url(${hoveredImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          width: isMorphing ? 160 : 16,
          height: isMorphing ? 100 : 16,
          borderRadius: isMorphing ? "24px" : "9999px",
          rotate: isMorphing ? 10 : 0,
          transition: { duration: transitionDuration, ease: "easeInOut" },
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 py-12 text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 z-10 relative w-full max-w-6xl">
          {/* Left Text */}
          <div className="text-center lg:text-right lg:items-end flex flex-col">
            <h1 className="text-sm sm:text-base md:text-lg font-light uppercase tracking-widest -mb-1">
              Fabrizio Terribile
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              FRONTEND
            </h2>
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

            {/* Bubble with chained animations */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-lime-400 overflow-hidden shadow-lg"
              style={{ backgroundColor: "#A3E635" }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  {showHi ? (
                    <motion.div
                      key="hi"
                      className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-black"
                      initial={{ y: isFirstHi.current ? "100%" : "-100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Hi
                    </motion.div>
                  ) : (
                    <motion.div
                      key="wave"
                      className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-black"
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
              </div>
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































