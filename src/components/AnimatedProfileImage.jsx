import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedProfileImage({ frontImg, targetRef }) {
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  // You can compute progress as scrollY relative to targetRef top
  // For simplicity, use scrollY and window height to create progress between 0 and 1

  // Get target element position
  let targetTop = 0;
  if (targetRef && targetRef.current) {
    targetTop = targetRef.current.getBoundingClientRect().top + window.scrollY;
  }

  // Define input range: from Hero image top to target top
  const start = containerRef.current
    ? containerRef.current.getBoundingClientRect().top + window.scrollY
    : 0;

  // Create a transform from scrollY between start and targetTop
  const progress = useTransform(scrollY, [start, targetTop], [0, 1]);

  // Slide horizontally and vertically from initial to target positions (adjust as needed)
  const x = useTransform(progress, [0, 1], [0, 200]); // moves 200px right
  const y = useTransform(progress, [0, 1], [0, 300]); // moves 300px down
  const scale = useTransform(progress, [0, 1], [1, 0.5]); // shrinks image

  return (
    <motion.div
      ref={containerRef}
      style={{ x, y, scale }}
      className="relative w-[340px] h-[460px]"
    >
      <img
        src={frontImg}
        alt="Profile Animated"
        className="rounded-[24px] object-cover w-full h-full"
      />
    </motion.div>
  );
}


