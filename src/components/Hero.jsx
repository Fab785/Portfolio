import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import profileImg from "../assets/Fab.jpg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Lime dot fixed to viewport */}
      <motion.div
        className="fixed rounded-full bg-lime-400 pointer-events-none z-50"
        style={{ x: mouseX, y: mouseY, width: 16, height: 16 }}
      />

      {/* Your normal Hero content */}
      <section className="relative h-screen text-white flex items-center justify-center px-8 overflow-hidden">
        <div className="flex items-center gap-12 z-10">
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
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-[24px] object-cover object-[65%_center] w-[300px] h-[400px] md:w-[340px] md:h-[500px]"
            />
          </motion.div>

          <div className="flex flex-col items-end text-right">
            <h2 className="text-[80px] font-extrabold leading-none">DEVELOPER</h2>
            <p className="text-base mt-2 text-neutral-300 max-w-[250px]">
              I'm a US-based front-end developer
            </p>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-lime-400 text-black w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold z-20"
        >
          Hi
        </motion.div>
      </section>
    </>
  );
}














