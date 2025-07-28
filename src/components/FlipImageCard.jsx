import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "../assets/Fab.jpg";
import backImg from "../assets/pexels-serpstat-177219-572056.jpg";

const FlipImageCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Da 0 a 180° mentre scrolli
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[420px] perspective"
        style={{ perspective: "1000px", zIndex: 30 }}
      >
        <motion.div
          style={{
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full transition-transform duration-500 ease-in-out"
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={profileImg}
              alt="Front"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full rotate-y-180 backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <img
              src={backImg}
              alt="Back"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipImageCard;

