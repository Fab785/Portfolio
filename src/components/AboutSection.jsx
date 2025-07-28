import React from "react";
import frontImg from "../assets/Fab.jpg"; // front face
import backImg from "../assets/pexels-serpstat-177219-572056.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-neutral-900">
      <div className="relative w-[300px] h-[400px] perspective">
        {/* Flip card wrapper will go here later */}
        <div className="absolute inset-0">
          <img src={frontImg} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
