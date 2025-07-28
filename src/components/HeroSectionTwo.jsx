import React from "react";
import computerImg from "../assets/computer.jpg";

const HeroSectionTwo = () => {
  return (
    <section className="w-full min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-20 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* LEFT TEXT SIDE */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed max-w-xl">
            As a digital designer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          <ul className="space-y-6 text-lg md:text-xl tracking-wide font-medium">
            {["UI/UX DESIGN", "GRAPHIC DESIGN", "WEB DESIGN", "BRANDING"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-600 pb-3 group"
                >
                  <span>{index + 1}. {item}</span>
                  <span className="transform transition-transform duration-300 group-hover:rotate-180">
                    ↑
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl transform rotate-6 shadow-xl overflow-hidden">
            <img
              src={computerImg}
              alt="computer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
