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
    }, 4000); // toggle every 4 seconds (2s show + 2s wave)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Lime dot fixed to viewport */}
      <motion.div
        className="fixed rounded-full bg-lime-400 pointer-events-none z-50"
        style={{ x: mouseX, y: mouseY, width: 16, height: 16 }}
      />

      {/* Your normal Hero content */}
      <section className="relative h-screen text-white flex items-center justify-center px-8 overflow-hidden">
        <div className="flex items-center gap-12 z-10 relative">
          <div className="flex flex-col items-start text-right leading-none">
            <h1 className="text-lg font-light uppercase tracking-widest -mb-2">
              Fabrizio Terribile
            </h1>
            <h2 className="text-[80px] font-extrabold">FRONTEND</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-[24px] object-cover object-[65%_center] w-[300px] h-[400px] md:w-[340px] md:h-[460px]"
            />

            {/* HI / Waving Hand Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-10 -left-10 bg-lime-400 text-black w-28 h-28 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg select-none"
              style={{ backgroundColor: "#A3E635", width: 88, height: 88 }}
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
                  style={{ display: "inline-block" }}
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    👋
                  </motion.span>
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-end text-right">
            <h2 className="text-[80px] font-extrabold leading-none">DEVELOPER</h2>
            <p className="text-base mt-2 text-neutral-300 max-w-[250px]">
              I'm a US-based front-end developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
















